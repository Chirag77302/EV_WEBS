const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ChargerSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    location:{type:String,required:true},
    maxSlots:{type:Number, required:true},
    slots:{type:Number},
    state:{type:String,required:true},
    password:{type:String,required:true},
    geometry: {
        type: {type: String, enum: ['Point'],required: true},
        coordinates: {type: [Number],required: true}
      },
    type:{type:String,required:true},
    phone:{type:String,required:true}
});

ChargerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

ChargerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const Charger = mongoose.model('Charger',ChargerSchema);
module.exports = Charger;