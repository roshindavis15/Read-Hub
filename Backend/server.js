require('dotenv').config();
const express=require('express');
const mongoose =require('mongoose')

const app=express();

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`);
})


mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("MongoDB connecteed"))
.catch(err=> console.error("Error connecting to MongoDB:",err));