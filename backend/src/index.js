import express from "express";
import { connectDb } from "./configs/db.js";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import { config } from "./configs/config.js";
// import {  } from "module";
const app = express();

// middleware 
app.use(express.json());
app.use(cors("*"));
app.use(morgan("tiny"));

// routes
app.get("/" , async (req , res)=> res.send("api respose....."));
// process.on()

connectDb().then((data)=>{
    console.log('data >>>',data);
app.listen(config.Port , ()=> {
    console.log("server is runnig");
})
}).catch(()=>{
    console.log("somethings went wrongs");
})
