const sendResponse = (res , status , data , err, message)=>{
res.status(status).json(
    {
        err , 
        data: data,
        message,

    }

)
}