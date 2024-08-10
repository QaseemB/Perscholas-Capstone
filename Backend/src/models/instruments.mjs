import mongoose from "mongoose";


const instrumentSchema = new mongoose.Schema({
    model: {type: String,required: true, unique: true, },
    price: { type: Number, required: true,},
    weight: { type: String, required: true,},
    dimensions: {type: String, required: true,},
    Description: {type: String,}
})

const Instruments = mongoose.model("Instruments",instrumentSchema);


export {Instruments}