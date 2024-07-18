import  express from "express";

import dotenv from "dotenv";
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser';
import connectMongodb from "./db/connectMongodb.js";


// import userRoutes from "./routes/user.routes.js";
const app = express();


const PORT=8080;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);




app.listen(PORT,()=>{
    connectMongodb()
    console.log(`express is running on port ${PORT}`)
});