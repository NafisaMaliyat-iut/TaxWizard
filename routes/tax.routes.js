const route = require("express").Router();

const {
  getHome,
} = require("../controllers/tax.controllers.js");

route.get("/home", getHome);
module.exports = route;
