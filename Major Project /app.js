const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAscync = require("./utils/wrapAscync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema} = require("./schema.js");
const Review = require("./models/reviews.js");



app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")));



main().then((res)=>{
    console.log("connected with DB");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const validateListing = (req,res,next)=>
{
    let {error} = listingSchema.validate(req.body);
   
    if(error)
    {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else
    {
        next();
    }
    
}

app.get("/",(req,res)=>{
    res.send("woriking");
});
//add route
app.get("/listings/new",(req,res)=>
{
    res.render("listings/new.ejs");
});

//root route
app.get("/listings",wrapAscync(async(req,res)=>{
  const allListings = await Listing.find({});
    res.render("listings/home.ejs",{ allListings });
}));

//show route
app.get("/listings/:id", wrapAscync(async (req,res)=>
{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));

//create route
app.post("/listings",validateListing,wrapAscync(async(req,res,next)=>
{

    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

}));


//edit route
app.get("/listings/:id/edit", wrapAscync(async (req,res)=>
{
    
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{ listing});

}));

//update route
app.patch("/listings/:id",validateListing,wrapAscync(async (req,res)=>
{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
    
}));


//delete route
app.delete("/listings/:id",async (req,res)=>
{
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
    
});

//Reviews 
//post method 
app.post("/listings/:id/reviews",async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review); 
    listing.reviews.push(newReview);
    await listing.save();
    await newReview.save();
    res.send("Review Added Successfuly");
});


app.use("*",(req,res,next)=>
{
next (new  ExpressError(404,"Page Not Found "));
});

app.use((err,req,res,next)=>{
    let {StatusCode  = 500 , message = "Something went wrong"} = err;
    res.status(StatusCode).render("error.ejs",{ err});
})

// app.get("/testing",async (req,res)=>{
//     const sampleListing = new Listing({
//         title: "My home villa",
//         description: "By the beach",
//         price: 1200,
//         location: "calangut , Goa",
//         country: "india",
//     });
//     await sampleListing.save();
//     console.log(sampleListing);
//     res.send("Successful testing");
// });
app.listen(8080,()=>{

    console.log("app listning on 8080 ");
});
