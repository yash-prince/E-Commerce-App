import express from "express"
import { addCart, fetchCart, removeFromCart, updateCart } from "../controller/cart.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/cart/add",isAuth, addCart);
router.get("/cart/remove/:id",isAuth,removeFromCart);
router.post("/cart/update",isAuth,updateCart);
router.get("/cart/all",isAuth, fetchCart);
export default router;