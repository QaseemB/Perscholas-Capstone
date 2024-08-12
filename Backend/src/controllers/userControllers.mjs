import { validationResult, matchedData, body, query} from "express-validator";
import {users} from '../data/users.mjs';
import {error} from '../utilties/error.mjs'
import { USERS } from "../models/users.mjs";
import mongoose from "mongoose";

export const resolveIndexByUserID = async (req,res,next)=>{
    const {
      body,
      params: {id},
    } = req;
   
    if(!mongoose.Types.ObjectId.isValid(id)) 
      return res.status(400);
    try {const findUser = await USERS.findById(id);
      if (!findUser) return next(error(404, 'User not found'));
    req.findUser = findUser;
    next()
    } catch (err){
      next(error(500, `Internal server error`))
    }
  
  };

   export const validateUsers = [
    body('name')
      .notEmpty()
      .withMessage(`Name cannot be empty`)
      .isLength({ min: 3, max: 25 })
      .withMessage('Name must be between 3-25 characters')
      .isString()
      .withMessage('Name must be a string'),
    body('username')
      .notEmpty()
      .withMessage(`Username cannot be empty`)
      .isLength({ min: 5, max: 25 })
      .withMessage(`Username must be between 5-25 characters`)
      .isString()
      .withMessage(`Username must be a string`),
    body('email')
      .isEmail()
      .withMessage('Invalid email format')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 5, max: 30 })
      .withMessage(`Password must be between 5-30 characters`),
  ]

export const getUsers = (req, res) => {
    const result = validationResult(req)
    console.log(result)
    if(!result.isEmpty())
      return res.status(400).send({errors: result.array()})

    const {query: {filter, value},} = req;
    console.log({query})
    // console.log("Filter:", filter, "Value:", value); 
    if (filter && value)
        return res.send(users.filter((user)=> user[filter].includes(value)));
      return res.json(users)
  }

  export const createUser = async (req, res) => {
    const result = validationResult(req);
    console.log(result)
    // console.log('req body:',req.body)
    if(!result.isEmpty()){
        return res.status(400).send({errors: result.array()});
    }
    const data = matchedData(req);
    console.log(`${data.name}: the data clg`);
    
    try {
      let newUser= new USERS ({
        id: users[users.length -1].id + 1, ...data
    });

    console.log(newUser)
      await newUser.save();
      console.log('New user has been saved succefully');
    } catch (error){
      console.log(`error saving new user`, error);
      return res.status(500).send({error:'error saving new user'});
    }
  };

  export const getUserById = (req, res) => {
    res.json(req.findUser);
  };

  export const updateUser = async (req, res) => {
    const updates = req.body;
    
    try {
      if (!req.findUser) {
        return res.status(404).send({ error: 'User not found' });
      }
  
      await USERS.updateOne({ _id: req.findUser._id }, { $set: updates });
      const updatedUser = await USERS.findById(req.findUser._id);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).send({ error: 'Error updating user' });
    }
  };


  export const deleteUser = async (req, res) => {
    try {
      if (!req.findUser) {
        return res.status(404).send({ error: 'User not found' });
      }
      await req.findUser.deleteOne({ _id: req.findUser._id });
      res.sendStatus(200);
    } catch (err) {
      console.error(`Error deleting user:`, err);
      res.status(500).send({ error: 'Error deleting user' });
    }
  };
  