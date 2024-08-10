import express from 'express';
const router = express.Router();
import { resolveIndexbyInstID
    ,createCartItem,
    getallCarts,
    updateCart,
    deleteCart } from '../controllers/CartController.mjs';


    router
        .route("/")
        .get(getallCarts)
        .post(createCartItem)
    router
        .route("/:id")
        .put(updateCart)
        .delete(deleteCart)

export {router}