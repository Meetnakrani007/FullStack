const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAscync = require("../utils/wrapAscync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/reviews.js");
const { isLoggedin, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

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
  isLoggedin,
  isReviewAuthor,
  wrapAscync(reviewController.destroyReview)
);

//post method
router.post(
  "/",
  isLoggedin,
  validateReview,

  wrapAscync(reviewController.createReview)
);

module.exports = router;
