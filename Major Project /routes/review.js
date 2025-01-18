const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAscync = require("../utils/wrapAscync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/reviews.js");

//server side for review
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//delete reivew route
router.delete(
  "/:reviewId",
  wrapAscync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review delete successfully!");
    res.redirect(`/listings/${id}`);
  })
);

//post method
router.post(
  "/",
  validateReview,
  wrapAscync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await listing.save();
    await newReview.save();
    req.flash("success", "New review added successfully!");
    res.redirect(`/listings/${listing._id}`);
  })
);

module.exports = router;
