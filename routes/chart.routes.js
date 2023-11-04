
const route = require("express").Router();

const passport = require("passport");
const {getChartData, getChartPage} = require("../controllers/chart.controller.js");

route.get("/chart",passport.authenticate('jwt',{session:false}), getChartData);
route.get('/get-chart', getChartPage)

module.exports = route;
