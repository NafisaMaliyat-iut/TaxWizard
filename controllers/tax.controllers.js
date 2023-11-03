const user = require('../models/user.model.js');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const passport = require('passport');