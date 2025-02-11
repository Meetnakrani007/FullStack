const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAscync = require("../utils/wrapAscync.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedin } = require("../middleware.js");
const { validateListing, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

//add route
router.get("/new", isLoggedin, (req, res) => {
  res.render("listings/new.ejs");
});

router
  .route("/")
  .get(wrapAscync(listingController.index))
  .post(isLoggedin, validateListing, wrapAscync(listingController.showListing));

router
  .route("/:id")
  .get(wrapAscync(listingController.renderNewForm))
  .patch(isLoggedin, validateListing, wrapAscync(listingController.updateForm))
  .delete(isLoggedin, isOwner, wrapAscync(listingController.destroyListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedin,
  isOwner,
  wrapAscync(listingController.editForm)
);

module.exports = router;
