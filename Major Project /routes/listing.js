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

//root route
router.get("/", wrapAscync(listingController.index));

//show route
router.get("/:id", wrapAscync(listingController.renderNewForm));

//create route
router.post(
  "/",
  isLoggedin,
  validateListing,
  wrapAscync(listingController.showListing)
);

//edit route
router.get(
  "/:id/edit",
  isLoggedin,
  isOwner,
  wrapAscync(listingController.editForm)
);

//update route
router.patch(
  "/:id",
  isLoggedin,
  validateListing,
  wrapAscync(listingController.updateForm)
);

//delete route
router.delete(
  "/:id",
  isLoggedin,
  isOwner,
  wrapAscync(listingController.destroyListing)
);

module.exports = router;
