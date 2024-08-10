import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users',  },
    instrument: { type: mongoose.Schema.Types.ObjectId, ref: 'Instruments' },
    studioEquipment: { type: mongoose.Schema.Types.ObjectId, ref: 'StudioEquipment' },
    quantity: { type: Number, min: 1 },
  });


  const Cart = mongoose.model('CartItem', cartItemSchema);

  export {Cart}