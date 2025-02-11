const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Review delete successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await listing.save();
  await newReview.save();
  req.flash("success", "New review added successfully!");
  res.redirect(`/listings/${listing._id}`);
};
