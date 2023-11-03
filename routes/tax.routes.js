const route = require("express").Router();

const {
  getHomePage, getCalculateTaxPage,
} = require("../controllers/tax.controllers.js");

route.get("/home", getHomePage);
route.get("/calculate", getCalculateTaxPage);
module.exports = route;
