const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAscync = require("./utils/wrapAscync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/reviews.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const session = require("express-session");
const flash = require("connect-flash");


app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")));

const sessionOptions = {
    secret : "mysupersecretcode",
    resave: false,
    saveUninitialized : true , 
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge :  7 * 24 * 60 * 60 * 1000,
        httpOnly : true,

    }
}



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

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg = req.flash('success');
    next();
});

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);


 

app.use("*",(req,res,next)=>
{
next (new  ExpressError(404,"Page Not Found "));
});

app.use((err,req,res,next)=>{
    let {StatusCode  = 500 , message = "Something went wrong"} = err;
    res.status(StatusCode).render("error.ejs",{ err});
});
app.listen(8080,()=>{
    console.log("app listning on 8080 ");
});
