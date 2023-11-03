const route=require('express').Router();

const {welcome
    } = require('../controllers/public.controllers');

route.get('/',welcome);


module.exports=route;