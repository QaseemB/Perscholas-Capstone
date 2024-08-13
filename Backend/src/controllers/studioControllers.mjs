import { validationResult, matchedData, body} from "express-validator";
import mongoose from "mongoose";
import {error} from '../utilties/error.mjs'
import { Studio } from "../models/studioeq.mjs";
import {studioeq} from "../data/studioeq.mjs";

export const resolveIndexStudioID = async (req,res,next)=>{
    const {params: {id} } = req;
      if(!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(400);
      try {const findStudio = await Studio.findById(id);
        if (!findStudio) return next(error(404, 'User not found'));
      req.findStudio = findStudio;
      next()
      }catch (err){
        next(error(500, `Internal server error`))
      }
    };

    export const validateStudio = [
        body('model').notEmpty().withMessage('Model is required'),
        body('price').isNumeric().withMessage('Price should be a number'),
        body('weight').notEmpty().withMessage('Weight is required'),
        body('dimensions').notEmpty().withMessage('Dimensions are required')
    ];

    export const createStudio = async (req,res)=>{
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
          let newStudio = new Studio ({
            id: studioeq[studioeq.length -1].id + 1,...data
        });
        console.log(`${data.model}: the data clg`)
          await newStudio.save();
          console.log('New user has been saved succefully');
        } catch (err){
          console.log(`error saving new user`, error);
          return res.status(500).send({error:'error saving new user'});
        }
      }


    export const getStudio = async (req, res) => {
        try {
          const studioData = await Studio.find();
          res.json(studioData);
        } catch (err) {
          console.error(`Issue getting Studioeq:`, err); 
          res.status(500).send({ error: 'Error fetching studio' });
        }
      };

      export const getStudioById = (req,res) =>{
        res.json(req.findInstrument)
       }

      export const updateStudio = async (req,res)=>{
        const updates = req.body;
         try {
           if (!req.findStudio) {
             return res.status(404).send({ error: 'User not found' });
           }
       
           await Studio.updateOne({ _id: req.findStudio._id }, { $set: updates });
           const updatedStudio = await Studio.findById(req.findStudio._id);
           res.status(200).json(updatedStudio);
         } catch (err) {
           res.status(500).send({ error: 'Error updating user' });
         }
      }


      export const deleteStudio = async (req,res) =>{
        try {
          if (!req.findStudio) {
            return res.status(404).send({ error: 'User not found' });
          }
          await req.findStudio.deleteOne({ _id: req.findStudio._id });
          res.sendStatus(200);
        } catch (err) {
          console.error(`Error deleting user:`, err);
          res.status(500).send({ error: 'Error deleting user' });
        }

      }