// var fs=require('fs');
const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');


var userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 8,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
      },
    firstName: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 15,
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 15,
    },
    dob: {
      type: Date,
    },
  },
  { timestamps: true }
);
userSchema.pre('save', function(next){
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password =hash;
  next();
})
var userModel = mongoose.model('User', userSchema);

module.exports =userModel;
