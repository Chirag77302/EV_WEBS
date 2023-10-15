const express = require('express');
const mongoose = require('mongoose');
const UserBooks = require('./UserBooks.js');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    bookings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'UserBooks'
        }
    ]
});

const User = mongoose.model('User',UserSchema);
module.exports = User;

