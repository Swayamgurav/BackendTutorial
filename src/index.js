import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
// require('dotenv').config({path:'./env'})
// import express from "express";
// require('dotenv').config
import dotenv from "dotenv";
import { app } from "./app.js";
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(
//             `${process.env.MONGODB_URL}/${DB_NAME}`
//         );

//         console.log("✅ MongoDB Connected Successfully");

//         app.on("error", (error) => {
//             console.error("❌ Express App Error:", error);
//             throw error;
//         });

//         app.listen(process.env.PORT || 8000, () => {
//             console.log(
//                 `🚀 Server is running on port ${process.env.PORT || 8000}`
//             );
//         });

//     } catch (error) {
//         console.error("❌ MongoDB Connection Failed:", error);
//         process.exit(1);
//     }
// })();
dotenv.config({
    path:'./env'
})
connectDB()
.then((result) => {
    app.listen(process.env.PORT || 8000,()=>{
        console.log("Server is running on port 8000");
        
    })
}).catch((err) => {
    console.log("Mongo db conection failed",err);
    
});