import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import { configDotenv } from "dotenv";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true,limit:true}))
app.use(express.static())

app.use(cookieParser())

export{app}