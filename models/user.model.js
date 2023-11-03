const mongoose = require('mongoose');
const generateJWT = require('../config/jwt_generator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    nid: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    
    city_corporation: {
        type: String,
        required: true,        
        enum: ['dhaka', 'chattogram', 'othercity', 'noncity']
    }
});


userSchema.statics.login=async function(user){
    try{
        const existingUser = await this.findOne({ nid: user.nid });
        if(!existingUser){
            throw new Error("User not found");
        }
        const isMatch=await bcrypt.compare(user.password,existingUser.password);
        if(!isMatch){
            throw new Error("Password not match");
        }

        const token=await generateJWT(existingUser);
        return token;
    }
    catch(error){
        throw error;
    }
}


const User = mongoose.model('User', userSchema);

module.exports = User;
