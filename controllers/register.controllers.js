const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const passwordValidator = require('password-validator');

const registerUser = async (req, res) => {
    try {
        const {nid,password,full_name, age,city_corporation,gender} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        if(password.length<8){
            throw new Error('Password should have minimum of 8 characters');
        }
        const newUser = new User({
            nid,
            password: hashedPassword,
            full_name,
            age,
            gender,
            city_corporation
        });
        await newUser.save();
        return res.status(200).json({success:true,redirectTo: '/login'});
    } catch (err) {
        res.status(400).json({success:false,message:err.message});
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