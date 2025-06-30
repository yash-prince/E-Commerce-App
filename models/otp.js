import mongoose from "mongoose"
 const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:Number,
        required: true,
    },
    expiresAt: {
        type:Date,
        default:()=> new Date(Date.now()+5*60*1000),
        index:{exppires:"5m"},
    },
 })

 export const OTP = mongoose.model("OTP",otpSchema);