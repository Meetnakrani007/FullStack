const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAscync = require("../utils/wrapAscync.js");
const { listingSchema , reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");


//server side for listing
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
//add route
router.get("/new",(req,res)=>
{
    res.render("listings/new.ejs");
});

//root route
router.get("/",wrapAscync(async(req,res)=>{
  const allListings = await Listing.find({});
    res.render("listings/home.ejs",{ allListings });
}));

//show route
router.get("/:id", wrapAscync(async (req,res)=>
{
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));

//create route
router.post("/",validateListing,wrapAscync(async(req,res,next)=>
{

    let newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New listing added successfully!");
    res.redirect("/listings");

}));


//edit route
router.get("/:id/edit", wrapAscync(async (req,res)=>
{
    
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{ listing});

}));

//update route
router.patch("/:id",validateListing,wrapAscync(async (req,res)=>
{
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
    
}));


//delete route
router.delete("/:id",async (req,res)=>
{
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success","New listing delete successfully!");
    res.redirect("/listings");
    
});

module.exports = router;