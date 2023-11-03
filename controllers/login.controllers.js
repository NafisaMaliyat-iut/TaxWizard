const user = require('../models/user.model.js');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const passport = require('passport');

const getLogin=async(req,res)=>{
    try{
        return res.status(200).render('pages/login');
    }
    catch(error){
        return res.status(404).render('error404');
    }
}

//export module
module.exports = {
    getLogin
}