import { Cart } from "../models/cart.js";
import { Order } from "../models/Order.js";
import sendOrderConfirmation from "../utils/sendOrderConfirmation.js";
import TryCatch from "../utils/TryCatch.js";

export const newOrderCod = TryCatch(async(req,res)=>{
    const {method, phone ,address}=req.body

    const cart = await Cart.find({user: req.user._id}).populate({
        path:"product",
        select:"title price",
    });

    if(!cart.length)return res.status(400).json({message:"cart is empty"});

    let subTotal = 0;

    const items = cart.map((i)=>{
        const itemSubtotal = i.product.price * i.quantity;

        subTotal +=itemSubtotal;
        return {
        product:i.product._id,
        name:i.product.title,
        price:i.price,
        quantity:i.quantity,
    };
    });

    const order = await Order.create({
        items,
        method,
        user:req.user._id,
        phone,
        address,
        subTotal,
    })

    for(let i of order.items){
        const product = await Product.findById(i.product);

        if(product){
            product.stock -=i.quantity;
            product.sold +=i.quantity;

            await product.save();
        }
    }

    await Cart.deleteMany({user:req.user._id})

    await sendOrderConfirmation({
        email:req.user.email,
        subject:"Ordder Confirmation",
        orderId:order._id,
        products:items,
        totalAmount:subTotal,
    })

    res.json({
        message:"order created successfully",
        order,
    })

});