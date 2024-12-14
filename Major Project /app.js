const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const methodOverride = require("method-override");


app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));



main().then((res)=>{
    console.log("connected with DB");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
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
app.get("/listings",async(req,res)=>{
  const allListings = await Listing.find({});
    res.render("listings/home.ejs",{ allListings });
});

//show route
app.get("/listings/:id", async (req,res)=>
{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//create route
app.post("/listings",async(req,res)=>
{
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});


//edit route
app.get("/listings/:id/edit", async (req,res)=>
{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{ listing});

});

//update route
app.patch("/listings/:id",async (req,res)=>
{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
    
});


//delete route
app.delete("/listings/:id",async (req,res)=>
{
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
    
});





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
