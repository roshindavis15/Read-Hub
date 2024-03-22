const express=require('express');
const user_route=express.Router();
const userController=require('../controllers/userController');
const validateUserRegistration = require('../middleware/validationMiddleware');
const authMiddleware=require('../middleware/authMiddleware');




user_route.post('/register',validateUserRegistration,userController.registerUser);
user_route.post('/login',userController.loginUser);
user_route.put('/verifyOtp',userController.verifyingOtp);
user_route.put('/resendOtp',userController.resendOtp);
user_route.post('/logout',authMiddleware,userController.logoutUser);


module.exports=user_route;
