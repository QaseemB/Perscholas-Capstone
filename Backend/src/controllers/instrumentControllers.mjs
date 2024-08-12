import { validationResult, matchedData,body} from "express-validator";
import mongoose from "mongoose";
import {error} from '../utilties/error.mjs'
import { Instruments } from "../models/instruments.mjs";
import { instrumentTest } from "../data/instrument.mjs";



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
  export const validateInstrument = [
    body('model').notEmpty().withMessage('Model is required'),
    body('price').isNumeric().withMessage('Price should be a number'),
    body('weight').notEmpty().withMessage('Weight is required'),
    body('dimensions').notEmpty().withMessage('Dimensions are required')
];

  export const createInstrument = async (req,res)=>{
    const result = validationResult(req);
    console.log(result)
    // console.log('req body:',req.body)
    if(!result.isEmpty()){
        return res.status(400).send({errors: result.array()});
    }
    const data = matchedData(req);
    console.log('req.body:', req.body); 
    console.log('matchedData:', data); 
    
    try { 
      let newInstrument = new Instruments ({
        id: instrumentTest[instrumentTest.length -1].id + 1,...data
    });
    console.log(`${data.model}: the data clg`)
      await newInstrument.save();
      console.log('New user has been saved succefully');
    } catch (error){
      console.log(`error saving new user`, error);
      return res.status(500).send({error:'error saving new user'});
    }
  }

 export const getInstrument = async (req,res) =>{
  const instrumentsData = await Instruments.find();
  console.error(error, `Issue getting instruments`)
    res.json(instrumentsData);
 }

 export const getInstrumentById = (req,res) =>{
  res.json(req.findInstrument)
 }

 export const updateInstrument = async (req,res)=>{
   const updates = req.body;
    try {
      if (!req.findInstrument) {
        return res.status(404).send({ error: 'User not found' });
      }
  
      await Instruments.updateOne({ _id: req.findInstrument._id }, { $set: updates });
      const updatedInstruments = await Instruments.findById(req.findInstrument._id);
      res.status(200).json(updatedInstruments);
    } catch (err) {
      res.status(500).send({ error: 'Error updating user' });
    }
 }

 export const deleteInstrument = async (req,res) =>{
  try {
    if (!req.findInstrument) {
      return res.status(404).send({ error: 'User not found' });
    }
    await req.findInstrument.deleteOne({ _id: req.findInstrument._id });
    res.sendStatus(200);
  } catch (err) {
    console.error(`Error deleting user:`, err);
    res.status(500).send({ error: 'Error deleting user' });
  }
 }