import mongoose, { connection } from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async ()=>{
    try {
        const connectioninstance = await mongoose.connect("mongodb+srv://guravswayam07_db_user:mf7aNbrGwU8uTbFp@swayamdatabase.ihxzv6e.mongodb.net/"+DB_NAME)
      
        console.log(`MONGO db connected successfully DB HOST: ${connectioninstance.connection.host}`);
       
    } catch (error) {
        console.log("MONGODB connection failed:",error);
        process.exit(1)
        
    }
    
    

}
module.exports = connectDB

export const DBNAME = "Swayam54"


import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db";


dotenv.config({
    path:"./env"
}).then((result) => {
   app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server Running on port 8000`);
    
   })
    
}).catch((err) => {
    console.log("Mongodb connection failed:",err);
    process.exit(1)
    
});

