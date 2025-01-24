import express from "express";
import { connectDb } from "./configs/db.js";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import { config } from "./configs/config.js";
import cookieParser from 'cookie-parser';
const app = express();

// middleware 
app.use(express.json());
app.use(cors("*"));
app.use(morgan("tiny"));
app.use(cookieParser());

// routes
app.get("/" , async (req , res)=> res.send("api respose....."));
// app.use("/api/auth" )
// process.on()

connectDb().then((data)=>{
    console.log('data >>>',data);
app.listen(config.port , ()=> {
    console.log("server is runnig");
})
}).catch(()=>{
    console.log("somethings went wrongs");
})
