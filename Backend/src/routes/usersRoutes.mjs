import express from 'express';
const router = express.Router();
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
