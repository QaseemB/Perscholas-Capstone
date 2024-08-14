import  Mongoose  from "mongoose";
import dotenv from "dotenv";
import { USERS } from "../src/models/users.mjs";
import {Instruments} from '../src/models/instruments.mjs'
import {Studio} from '../src/models/studioeq.mjs'
import { users} from "../src/data/users.mjs"
import { studioeq } from '../src/data/studioeq.mjs';
import { instrumentTest } from "../src/data/instrument.mjs";
import { Cart } from "../src/models/Cart.mjs";
import mongoose from "mongoose";


dotenv.config();

const cleanData = async ()=> {
  const ATLAS_URI = mongoose.connect(process.env.ATLAS_URI);
    try{
        if (!ATLAS_URI){
            throw new Error(`ATLAS_URI is missing in env file`)
        }
        await Studio.deleteMany({})
            console.log('studio equipment has been cleared')
        await USERS.deleteMany({})
              console.log("users has been cleared")
        await Instruments.deleteMany({})
            .then(()=>{
              console.log("Instruments has been cleared")
            })
            .catch((error)=>{
              console.log('error deleting the Instruments')
            })
          await Cart .deleteMany({})
            .then(()=>{
              console.log("Cart has been cleared")
            })
            .catch((error)=>{
              console.error('error clearing Cart',error)
            });
        await Studio.insertMany(studioeq)
            .then(()=> {
              console.log(`Studio has been saved`)
            })
            .catch((error)=>{
              console.log('Error saving users', error)
            })
        await USERS.insertMany(users)
            .then(()=> {
             console.log('userdb has been saved')
              })
            .catch ((error)=>{
            console.error('Error saving users', error)
          });
        await Instruments.insertMany(instrumentTest)
            .then(()=> {
            console.log('Instruments has been saved')
            })
            .catch ((error)=>{
            console.error('Error saving Instruments', error)
             })
          await Cart.insertMany()
            .then(()=>{
              console.log(('Cart has been saved'))
            }).catch((error)=>{
              console.error('error saving Instuments',error)
            });
    }   catch(error) {
        console.error(error.message);
        process.exit(1);
      }
}

cleanData()


// this script idea came from nadir 