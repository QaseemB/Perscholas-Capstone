import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', },  
    // required:true have to find a way to send the cart request that doesnt fail the cart validation for user 
    instrument: { type: mongoose.Schema.Types.ObjectId, ref: 'Instruments', required: true },
    studioEquipment: { type: mongoose.Schema.Types.ObjectId, ref: 'StudioEquipment' },
    quantity: { type: Number, min: 1, },
     // required:true have to find a way to send the cart request that doesnt fail the cart validation for quantity 
  });


  const Cart = mongoose.model('CartItem', cartItemSchema);

  export {Cart}