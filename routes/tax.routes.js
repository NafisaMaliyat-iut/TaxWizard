const route = require("express").Router();

const passport = require("passport");
const { getprofile } = require("../controllers/profile.controllers.js");
const {
  getHomePage, getCalculateTaxPage,
} = require("../controllers/tax.controllers.js");

route.get("/home", getHomePage);
route.get("/profile-information",passport.authenticate('jwt',{session:false}),getprofile);
route.get("/calculate", getCalculateTaxPage);
module.exports = route;
