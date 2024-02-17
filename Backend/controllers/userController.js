const User=require('../models/userModel');
const userHelper=require('../helpers/userHelper');
const bcrypt=require('bcrypt');

exports.registerUser=async(req,res)=>{
    try {
        console.log("req.body:",req.body)
        //extract user data from req body
        const {name,email,mobile,password}=req.body;

        //check if user already exist
        const userExist= await userHelper.checkExistingUser(email);

        if(userExist){
            return res.status(400).json({message:'User already exist'});
        }
         
        //hashing the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        // create new user instance
        const newUser=new User({
               name,
               email,
               mobile,
               password:hashedPassword
        });

        await newUser.save();

        res.status(201).json({message:'User registered successfully'});

    } catch (error) {
        console.error('Error registering the user:',error);
        
        res.status(500).json({message:'internal server error'});
    }
}

