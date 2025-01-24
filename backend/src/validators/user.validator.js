import joi from "joi";


export const loginSchema = joi.object({
    fullName : joi.string().min(3).max(30).required(),
    email : joi.string().email({
        minDomainSegments : 2,
        tlds : {allow : ["com" , "net"]}
    }),
    password : joi.string().min(6).required()
})