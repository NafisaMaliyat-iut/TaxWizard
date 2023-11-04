
const route = require("express").Router();

const passport = require("passport");
const {getChartData} = require("../controllers/chart.controller.js");

route.get("/chart",passport.authenticate('jwt',{session:false}), getChartData);

module.exports = route;
