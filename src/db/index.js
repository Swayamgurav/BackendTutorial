import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            "mongodb+srv://guravswayam07_db_user:mf7aNbrGwU8uTbFp@swayamdatabase.ihxzv6e.mongodb.net/" + DB_NAME
        );

        console.log(
            `\nMongoDB Connected Successfully !! DB HOST: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.log("MONGODB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;