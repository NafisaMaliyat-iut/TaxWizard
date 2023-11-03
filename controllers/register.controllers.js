const user = require('../models/user.model.js');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const passport = require('passport');

//register user
const registerUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
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