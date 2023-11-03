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

const loginUser=async(req,res)=>{
    try{
        const {nid,password} = req.body;
        const userdummy={nid,password};
        const token=await user.login(userdummy);
        res.status(200).json({success:true,token:token,redirectTo:'/home'})
        // return res.status(200).json({message:"User logged in successfully"})
    }
    catch(error){
        // return res.status(404).render('error404');
        return res.status(404).json({error:error.message});
    }
}

//export module
module.exports = {
    getLogin,
    loginUser
}