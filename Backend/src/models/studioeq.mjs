import mongoose from "mongoose";



const studioSchema = new mongoose.Schema({
   model: { type: String,required: true,unique: true,},
    price: {type: Number,required: true,},
    weight: {type: String,required: true,},
    dimensions: {type: String,required: true,},
    Description: {type: String}
})

const Studio = mongoose.model("Studio",studioSchema);

export {Studio}