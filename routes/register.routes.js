const route = require("express").Router();

const {
  registerUser,
  getRegister,
} = require("../controllers/register.controllers.js");

route.get("/register", getRegister);
module.exports = route;
