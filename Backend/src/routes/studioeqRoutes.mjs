import express from 'express';
const router = express.Router();
import { resolveIndexStudioID,getStudio,updateStudio,deleteStudio,validateStudio,createStudio,getStudioById } from '../controllers/studioControllers.mjs';
import { validateInstrument } from '../controllers/instrumentControllers.mjs';

router
  .route("")
  .get(getStudio)
  .post(validateInstrument,createStudio)


  router
  .route("/:id")
  .get(resolveIndexStudioID,getStudioById)
  .patch(resolveIndexStudioID,updateStudio)
  .delete(resolveIndexStudioID,deleteStudio)



  export{router}