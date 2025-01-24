import mongoose from "mongoose";

export const connectDb = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected successful");
} catch (error) {
    console.log('error =>',error);
    process.exit(1);
}
}