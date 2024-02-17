const express=require('express');
const user_route=express.Router();
const userController=require('../controllers/userController');
const validateUserRegistration = require('../middleware/validationMiddleware');



//for registeration
user_route.post('/register',validateUserRegistration,userController.registerUser);

module.exports=user_route;
