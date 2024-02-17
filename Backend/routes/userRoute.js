const express=require('express');
const user_route=express.Router();
const userController=require('../controllers/userController');


//for registeration
user_route.post('/register',userController.registerUser);

module.exports=user_route;
