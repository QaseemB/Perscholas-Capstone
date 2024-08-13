import express from 'express';
const router = express.Router();

import {studioeq} from '../data/studioeq.mjs';
import {error} from '../utilties/error.mjs'

const resolveIndexbyEqID = (req,res,next)=>{
  const {
    body, 
    params: {id}
  } = req;
  const parsedID = parseInt(id);
  if(isNaN(parsedID)) return res.sendStatus(400)
  const findEqIndex = studioeq.findIndex((s)=> s.id === parsedID);
  if (findEqIndex === -1) return res.sendstatus(404);
  req.findEqIndex = findEqIndex;
  next()
}

router
  .route("/")
  .get((req, res) => {
    res.json(studioeq);
  })
  .post((req,res)=>{
    console.log(req.body);
    const {body} = req;
    const newEquipment = {id: studioeq[studioeq.length -1].id + 1, ...body};
    studioeq.push(newEquipment);
    return res.sendStatus(201);
  });

  router
  .route("/:id")
  .get((req,res)=>{
    const eqipment = studioeq.find((s)=> s.id == req.params.id);
    if(eqipment) res.json(eqipment);
  })
  .patch(resolveIndexbyEqID, (req,res)=>{
    const {body,findEqIndex} = req;
    studioeq[findEqIndex] = {...studioeq[findEqIndex], ...body};
    console.log(studioeq)
    return res.sendStatus(204);
    })
  .delete(resolveIndexbyEqID, (req,res)=>{
    const {body,findEqIndex} = req;
    studioeq[findEqIndex] = {...studioeq[findEqIndex], ...body};
    studioeq.splice(findEqIndex, 1)
    return res.sendStatus(200)
    })


  export{router}