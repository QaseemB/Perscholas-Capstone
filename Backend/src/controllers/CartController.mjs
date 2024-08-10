import { validationResult, matchedData,body} from "express-validator";
import mongoose from "mongoose";
import {error} from '../utilties/error.mjs'
import { Cart } from "../models/Cart.mjs";


export const resolveIndexbyInstID = async (req,res,next)=>{
    const {params: {id} } = req;
      if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.sendstatus(400);
      try {const findInstrument = await Instruments.findById(id);
        if (!findInstrument) return next(error(404, 'User not found'));
      req.findInstrument = findInstrument;
      next()
      }catch (err){
        next(error(500, `Internal server error`))
      }
    
  };



export const createCartItem = async (req,res)=>{
    const cart = new Cart(req.body);
    await cart.save();
    res.send(cart);
}

export const getallCarts = async (req,res)=>{
    const carts = await Cart.find();
    res.send(carts);
}

export const updateCart = async (res,req)=>{
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(cart);
}
export const deleteCart = async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);
    res.send({ message: 'Cart deleted' });
  };
