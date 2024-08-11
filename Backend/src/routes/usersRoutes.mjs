import express from 'express';
const router = express.Router();
import { query, body } from "express-validator";
import {
  resolveIndexByUserID,
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  validateUsers
} from '../controllers/userControllers.mjs';

router
  .route("/")
  .get(
    query('name')
      .isString()
      .notEmpty()
      .withMessage(`Filter cannot be empty`)
      .isLength({ min: 3, max: 20 })
      .withMessage(`Filter must be between 3-20 characters`),
    getUsers, (req,res)=>{
      randomFunction(req,res)
    })
  .post( validateUsers,createUser);


router
  .route("/:id")
  .get(resolveIndexByUserID, getUserById)
  .patch(resolveIndexByUserID, updateUser)
  .delete(resolveIndexByUserID, deleteUser);

export { router };
