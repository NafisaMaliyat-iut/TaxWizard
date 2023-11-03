const route = require("express").Router();

const passport = require("passport");
const { getprofile } = require("../controllers/profile.controllers.js");
const {
  getHomePage, getCalculateTaxPage, postCalculateTax
} = require("../controllers/tax.controllers.js");


route.post("/calculateTax",passport.authenticate('jwt',{session:false}), postCalculateTax);
route.get("/home", getHomePage);
route.get("/profile-information",passport.authenticate('jwt',{session:false}),getprofile);
route.get("/calculate", getCalculateTaxPage);
route.post("/calculateTax", postCalculateTax);
module.exports = route;
