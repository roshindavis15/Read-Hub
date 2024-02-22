const express=require('express');
const user_route=express.Router();
const userController=require('../controllers/userController');
const validateUserRegistration = require('../middleware/validationMiddleware');




user_route.post('/register',validateUserRegistration,userController.registerUser);
user_route.post('/login',userController.loginUser);
user_route.post('/verifyOtp',userController.verifyingOtp)

module.exports=user_route;
