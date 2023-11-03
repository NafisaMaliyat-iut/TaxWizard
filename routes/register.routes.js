const route=require('express').Router();

const {getRegister,
    registerUser
    } = require('../controllers/user.controller');

route.get('/register',getRegister);


module.exports=route;