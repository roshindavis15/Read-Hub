const express=require('express');
const admin_route=express.Router();
const adminController=require('../controllers/adminController');

admin_route.post('admin/login',adminController.loginAdmin);


module.exports=admin_route;