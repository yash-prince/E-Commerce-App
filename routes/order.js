import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { newOrderCod } from "../controller/order.js";

const router = express.Router();

router.post("/order/new/cod", isAuth, newOrderCod)

export default router;