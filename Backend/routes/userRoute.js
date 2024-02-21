const express=require('express');
const user_route=express.Router();
const userController=require('../controllers/userController');
const validateUserRegistration = require('../middleware/validationMiddleware');



//for registeration
user_route.post('/register',validateUserRegistration,userController.registerUser);
user_route.post('/login',userController.loginUser);

module.exports=user_route;
