const user = require("../models/user.model.js");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const getHome = async (req, res) => {
  try {
    return res.status(200).render("pages/home");
  } catch (error) {
    return res.status(404).render("error404");
  }
};

module.exports = {
  getHome,
};
