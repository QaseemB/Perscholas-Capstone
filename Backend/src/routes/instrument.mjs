import express from 'express';
const router = express.Router();
import { query, body } from "express-validator";
import { 
  getInstrumentById,
  getInstrument,
  resolveIndexbyInstID,
  createInstrument,
  updateInstrument,
  deleteInstrument,
  validateInstrument} from '../controllers/instrumentControllers.mjs';

router
  .route("/")
  .get(getInstrument)
  .post(validateInstrument,createInstrument)

  router
    .route("/:id")
    .get(resolveIndexbyInstID, getInstrumentById)
    .patch( resolveIndexbyInstID,updateInstrument)
    .delete( resolveIndexbyInstID, deleteInstrument)



export {router}