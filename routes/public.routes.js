const route=require('express').Router();

const {welcome,
    getRegister
    } = require('../controllers/public.controllers');

route.get('/',welcome);


module.exports=route;