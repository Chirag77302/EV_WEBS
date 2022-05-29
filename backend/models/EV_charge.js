const express = require('express');
const mongoose = require('mongoose');


const ChargerSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    maxSlots:{
        type:Number,
        required:true
    },
    slots:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    }
});

const Charger = mongoose.model('Charger',ChargerSchema);
module.exports = Charger;