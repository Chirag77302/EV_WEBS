const express = require('express');
const mongoose = require('mongoose');
const Charger = require('./EV_charge.js');

const UserBooksSchema = mongoose.Schema({
    Accept:{
        type:Boolean,
        default:false
    },
    Decline:{
        type:Boolean,
        default:false
    },
    station_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Charger'
    }
})

const UserBooks = mongoose.model('UserBooks',UserBooksSchema);
module.exports = UserBooks;