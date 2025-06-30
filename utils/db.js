import mongoose from "mongoose"

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"Ecommerce2025",
        });
        console.log("Database(Mongodb) connected")
    } catch(error){
        console.log(error);
    }
};
export default connectDb;