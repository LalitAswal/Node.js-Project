const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registration = new mongoose.Schema({

    profilePhoto:{
        type: String,
        required :true
    },
      name: {
        type:String,
        required:true,
      },
      password: {
        type:Number,
        required: true

      },
      passwordRepeat: {
        type:Number,
        required: true

      },
      countrycode: {
        type:Number,
        required:true
      } ,
      phone:{
        type:Number,
        required:true,
        unique:true
      },
      dob: {
        type:Number,
        required:true

      },
      gender: {
        type:String,
        required: true
      }
})

// now we need to create a collection
const Register = new mongoose.model("Users",registration);
module.exports= Register;

