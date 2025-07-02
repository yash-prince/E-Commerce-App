process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Disable SSL verification for outgoing requests
import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import cloudinary from "cloudinary";

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
});

const app=express();

// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
import userRoutes from "./routes/user.js"
app.use(express.json());

app.use("/api", userRoutes);

import productRoutes from "./routes/product.js"
app.use("/api",productRoutes);

import cartRoutes from "./routes/cart.js";
app.use("/api", cartRoutes);

import addressRoutes from "./routes/address.js"
app.use("/api",addressRoutes);

import orderRoutes from "./routes/order.js"
app.use("/api",orderRoutes);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    connectDb();
});