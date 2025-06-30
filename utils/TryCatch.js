const TryCatch = (handler)=>{
    return async(req,resizeBy,next)=>{
        try{
            await handler(req,resizeBy,next);
        } catch(error){
            resizeBy.status(500).json({
                message:error.message,
            });
        }
    };
};
export default TryCatch;