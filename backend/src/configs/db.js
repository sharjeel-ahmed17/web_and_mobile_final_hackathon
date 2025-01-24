import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDb = async ()=>{
try {
    await mongoose.connect(config.monogo_uri);
    console.log("db connected successful");
} catch (error) {
    console.log('error =>',error);
    process.exit(1);
}
}