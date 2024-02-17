const User=require('../models/userModel');

exports.checkExistingUser=async(email)=>{
    try {
        const existingUser= await User.findOne({email});
        return existingUser !==null;
    } catch (error) {
        console.error('Error checking existing user',error);
        throw new Error('Internal Server Error')
    }
};