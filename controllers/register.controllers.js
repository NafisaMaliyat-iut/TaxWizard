const user = require('../models/user.model.js');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const passport = require('passport');

//register user
const registerUser = async (req, res) => {
    try {
        const {nid,email,password,full_name, age,city_corporation} = req.body;
        console.log(nid,email,password,full_name, age,city_corporation);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new user({
            nid,email,password:hashedPassword,full_name, age,city_corporation
        });
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getRegister=async(req,res)=>{
    try{
        return res.status(200).render('pages/register');
    }
    catch(error){
        return res.status(404).render('error404');
    }
}


//export module
module.exports = {
    registerUser, getRegister
}