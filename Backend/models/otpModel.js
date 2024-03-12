const mongoose= require('mongoose');

const otpModel=new mongoose.Schema({
    email:{type:String,required:true},
    otp:{type:String,required:true},
    createdAt:{type:Date,default:Date.now(),
    expires:'2m'}
})

module.exports=mongoose.model('OTP',otpModel);