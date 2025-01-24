import { sendResponse } from "../helpers/sendResponse.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"
import { config } from "../configs/config.js";

export async function authencateUser (req , res , next){
    try {
        const bearerToken = req?.headers?.authorization;
        const token = bearerToken?.split(" ")[1];
        if(!token) return sendResponse(res,500 , null, true , "token not provided" );
        const decode = jwt.verify(token , config.auth_secret);
        console.log("decoded" , decode);
        if (decode) {
            const user = await User.findById(decode._id).lean();
            if(!user) return sendResponse(res,500 , null, true , "somethings went wrong" );
            req.user = user;
            next();
        } else {
               sendResponse(res,500 , null, true , "somethings went wrong" )
        }
    } catch (error) {
        sendResponse(res,500 , null, true , "somethings went wrong" )
        
    }
}

