const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAscync = require("../utils/wrapAscync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
//signup
router.get("/signup", userController.renderSignup);

router.post("/signup", wrapAscync(userController.signup));

//Login

router.get("/login", userController.renderLogin);

router.post(
  "/login",
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
