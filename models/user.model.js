const mongoose = require('mongoose');

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
    fullname: {
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

const User = mongoose.model('User', userSchema);

module.exports = User;
