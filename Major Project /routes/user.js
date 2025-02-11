const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAscync = require("../utils/wrapAscync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const { route } = require("./listing.js");
//signup
router
  .route("/signup")
  .get(userController.renderSignup)
  .post(wrapAscync(userController.signup));

//Login
router
  .route("/login")
  .get(userController.renderLogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

//Logout
router.get("/logout", userController.logout);
module.exports = router;
