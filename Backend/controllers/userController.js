const User = require('../models/userModel');
const userHelper = require('../helpers/userHelper');
const bcrypt = require('bcrypt');
const OTP=require('../models/otpModel');


const jwt=require('jsonwebtoken');



exports.registerUser = async (req, res) => {
    try {
        console.log("req.body after validation:", req.body)
        //extract user data from req body
        const { name, email, mobile, password } = req.validatedUserData;

        //check if user already exist
        const userExist = await userHelper.checkExistingUser(email);

        if (userExist) {
            return res.status(400).json({ message: 'User already exist' });

        }else{
            const generatedOtp= await userHelper.generatingOtp();
            await OTP.create({email,otp:generatedOtp});
            await userHelper.sendOtp(email,generatedOtp);

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user instance
        const newUser = new User({
            name,
            email,
            mobile,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
        }

    } catch (error) {
        console.error('Error registering the user:', error);

        res.status(500).json({ message: 'internal server error' });
    }
}


exports.loginUser= async(req,res)=>{
    try {
        console.log("req.body:",req.body)
        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password)

        if(!isPasswordValid){
            return res.status(401).json({message:'Invalid Credentials'})
        }
        // generating token
        

        const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        console.log("token:",token)
        //sending the token in response
        res.status(200).json({token})
    } catch (error) {
        console.error('Error logging in:',error);
        res.status(500).json({message:'Internal Server error'})
    }
    
}


exports.verifyingOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const otpRecord = await OTP.findOne({ email, otp });
        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        const currentTime=new Date();
        const expirationTime=new Date(otpRecord.expiresAt);

        // Convert expiration time to the local time zone
        const expirationTimeLocal = new Date(expirationTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
        // If OTP expired
        if (  currentTime<expirationTime) {
            return res.status(400).json({ message: 'OTP expired' });
        }
        const user = await User.findOneAndUpdate(
            { email },
            { $set: { IsVerified: true } },
            { new: true }
        );

        await OTP.deleteOne({ email: otp });

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
