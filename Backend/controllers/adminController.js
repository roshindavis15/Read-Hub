const User=require('../models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// exports.loginAdmin=async(req,res)=>{
// try {
//     const {email,password}=req.body;
//     const admin=await User.findOne({email});
//     if(!admin){
//         return res.status(404).json({message:'Admin not found'});
//     }
//     if (!admin.is_admin) {
//         return res.status(403).json({ message: 'Unauthorized' });
//     }

//     const isPasswordValid=await bcrypt.compare(password,admin.password);

//     if(!isPasswordValid){
//         return res.status(401).json({message:'Incorrect Email or Password'});
//     }
    
//     const token=jwt.sign({user_id:admin._id},process.env.JWT_SECRET,{expiresIn:'1h'});
//     res.status(200).json({token})
// } catch (error) {
//     console.error('Error logging in:',error);
//     res.status(500).json({message:'Internal Server error'})
// }
// }