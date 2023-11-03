const route = require("express").Router();

const {
  registerUser,
  getRegister,
} = require("../controllers/register.controllers.js");

route.get("/register", getRegister);
route.post("/registerUser", registerUser);
module.exports = route;
