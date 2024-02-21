const User = require('../models/userModel');
const userHelper = require('../helpers/userHelper');
const bcrypt = require('bcrypt');


const jwt=require('jsonwebtoken');



exports.registerUser = async (req, res) => {
    try {
        console.log("req.body:", req.body)
        //extract user data from req body
        const { name, email, mobile, password } = req.validatedUserData;

        //check if user already exist
        const userExist = await userHelper.checkExistingUser(email);

        if (userExist) {
            return res.status(400).json({ message: 'User already exist' });
        }

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
        let env=process.env
        console.log("env:",process.env);

        const token=jwt.sign({userId:user._id},process.env.jwt_SECRET,{expiresIn:'1h'});
        console.log("token:",token)
        //sending the token in response
        res.status(200).json({token})
    } catch (error) {
        console.error('Error logging in:',error);
        res.status(500).json({message:'Internal Server error'})
    }
    
}
