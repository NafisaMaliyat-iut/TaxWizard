const route = require("express").Router();

const {
  getLogin,
  loginUser
} = require("../controllers/login.controllers.js");

route.get("/login", getLogin);
route.post("/loginUser",loginUser)
module.exports = route;
