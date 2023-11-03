const route = require("express").Router();

const {
  getLogin,
} = require("../controllers/login.controllers.js");

route.get("/login", getLogin);
module.exports = route;
