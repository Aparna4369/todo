import express from "express";
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
connectDB()

const port= process.env.PORT || 5001
const app=express();
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});