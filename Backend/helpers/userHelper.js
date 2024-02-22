const User=require('../models/userModel');
const nodemailer=require('nodemailer');

exports.checkExistingUser=async(email)=>{
    try {
        const existingUser= await User.findOne({email});
        return existingUser !==null;
    } catch (error) {
        console.error('Error checking existing user',error);
        throw new Error('Internal Server Error')
    }
};


exports.generatingOtp= async()=>{
    return Math.floor(100000+Math.random()*900000);
}

exports.sendOtp=async(email,otp)=>{
     try {
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER ,
                pass:process.env.EMAIL_PASS
            }
        })

        const mailOptions={
            from:process.env.EMAIL_USER,
            to:email,
            subject:'OTP For Registration on Read Hub',
            text:`Your OTP for registration is :${otp} `
        };
        await transporter.sendMail(mailOptions);
     } catch (error) {
        console.error('Error sending mail:',error);
        throw new Error('Failed to send OTP');
     }
}