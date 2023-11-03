const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');   
const passport = require('passport');
const User = require('../models/user.model');

const getprofile = async (req, res) => {
    try{
        const user=await User.findById(req.user.id);
        res.status(200).json(user);
    }
    catch{
        return res.status(500).json({message:"Internal server error"});
    }
}


module.exports={
    getprofile
}