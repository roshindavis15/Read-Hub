require('dotenv').config();
const express=require('express');
const mongoose =require('mongoose')

const app=express();
// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
const connectDB = require('./config/db');
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`);
})

connectDB();


const userRoute=require('./routes/userRoute');
app.use('/',userRoute);