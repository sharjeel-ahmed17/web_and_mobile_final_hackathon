import mongoose from "mongoose";
const {Schema , model} = mongoose;

const userSchema = new Schema({
    fullName : {
        type : String , 
        required : [true, 'first name is required'] , 
        trim: true,
    },
    email : {
        type : String , 
        required : [true, 'email name is required'] , 
        unique : true , 
        trim: true,
    },
    
    password : {
        type : String , 
        required : [true, "password is required"]
         
    },
    role : {
        type : String , 
        enum : ["user", "admin"], 
        default : "user"
    }
} , {timestamps : true})

const User = model("user", userSchema);
export default User
