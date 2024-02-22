const mongoose= require('mongoose');

const otpModel=new mongoose.Schema({
    email:{type:String,required:true},
    otp:{type:String,required:true},
    expiresAt:{type:Date,default:Date.now,expires:600}
})

module.exports=mongoose.model('OTP',otpModel);