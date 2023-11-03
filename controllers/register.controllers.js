const User = require('../models/user.model.js');
const path = require('path');
const bcrypt = require('bcrypt');
const passport = require('passport');

//register user
const registerUser = async (req, res) => {
    try {
        const {nid,password,full_name, age,city_corporation,gender} = req.body;
        // console.log(nid,password,full_name, age,city_corporation,gender);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            nid,
            password: hashedPassword,
            full_name,
            age,
            gender,
            city_corporation
        });
        await newUser.save();
        return res.status(200).json({ message: "User created successfully" });
        // return res.status(200).render('pages/login',{message:"User created successfully"});
    } catch (err) {
        res.status(400).render('pages/register', { err_message: err.message });
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