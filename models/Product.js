import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        requires:true,
    },
    description:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    images:[{
        id:String,url:String,
    },
    ],
    sold:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),

    }
});
export const Product = mongoose.model("Product",productSchema);