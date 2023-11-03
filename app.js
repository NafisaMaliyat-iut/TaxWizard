const express = require("express");
const app = express();
require("body-parser");
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const passport = require("passport");
require("./config/passport");
app.use(passport.initialize());

app.use(express.static('public'));
module.exports = app;
