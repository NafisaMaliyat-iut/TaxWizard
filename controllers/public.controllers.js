const user = require('../models/user.model.js');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const passport = require('passport');

//Welcome page
const welcome=async(req,res)=>{
    try{
        return res.status(200).render('pages/index');
    }
    catch(error){
        return res.status(404).render('error404');
    }
}

//get register page
const getRegister=async(req,res)=>{
    try{
        return res.status(200).render('pages/register');
    }
    catch(error){
        return res.status(404).render('error404');
    }
}


//Export modules
module.exports={
    getRegister,
    welcome
}