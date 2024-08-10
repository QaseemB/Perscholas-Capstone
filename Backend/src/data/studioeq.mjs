
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {Studio} from '../models/studioeq.mjs'


const studioeq =
[

    {
        
        model: "Neve 1073OPX 8-channel Microphone Preamp with Remote Control Software",
        price: 3995,
        weight: "17.19 lbs",
        dimensions:`3.5" (H) x 14.7"(W)x 19.05(D)`,
        Description: "8-channel Mic/Line/DI Preamplifier with with 70dB of Gain, Neve Marinair Transformers, Switchable Impedance, 48V Phantom Power, and Highpass Filters"
      },
      {

        model: "Avalon VT-737sp Tube Channel Strip",
        price: 3866,
        weight: "37.25lbs",
        dimensions:`3.5" (H) x 19" (W)x 12"(D)`,
        Description: "Tube Microphone / Instrument Preamplifier, Opto-compressor, and Sweep Equalizer"
      },
      {
        model: "Universal Audio Teletronix LA-2A Classic Leveling Amplifier",
        price:  4699,
        weight: " 13 lbs. ",
        dimensions:`5.25"(H) x 19"(W)x 7.25"(D)`,
        Description: "Electro-Optical Compressor / Limiter with Tube Circuitry"
      },
      
      {
        model: "Behringer 1273 2-channel Microphone Preamplifier and Equalizer",
        price:  699,
        weight: " 5 lbs. ",
        dimensions:`4"(H) x 10"(W)x 3"(D)`,
        Description: "2-channel Mic/Line/Instrument Preamp with 3-band EQ, Highpass Filter, Tone Switch, and Custom Midas Transformers"
      },
      {
        model: "Trident Audio Developments A-Range 500 Series Mic/Line/Instrument Preamp",
        price:  899,
        weight: " 4 lbs. ",
        dimensions:`3"(H) x 6"(W)x 3"(D)`,
        Description: "500 Series Mic/Line/Instrument Preamp with 70dB of Mic Gain, DI Input, and Switchable DI Impedance"
      },
      {
        model: "Manley VOXBOX Tube Channel Strip",
        price: 5499 ,
        weight: " 14 lbs. ",
        dimensions:`5.25"(H) x 19"(W)x 10"(D)`,
        Description: "Channel Strip with Class A Microphone Preamplifier, Pultec-style Equalizer, Optical Compressor, De-esser/Limiter, and Switchable VU Meter"
      },
      {
        model: "ADAM Audio A8H-L 8-inch 3-way Powered Studio Monitor (Left)",
        price:  1499,
        weight: " 30 lbs. ",
        dimensions:`9.75"(H) x 15"(W)x 13"(D)`,
        Description: "3-way Powered Studio Monitor with 8' LF Driver, 3.5' Midrange Driver, X-ART HF Driver, and Onboard DSP (each) - Left"
      },
      {
        model: "ADAM Audio A8H-L 8-inch 3-way Powered Studio Monitor (Right)",
        price:  1499,
        weight: " 30 lbs. ",
        dimensions:`9.75"(H) x 15"(W)x 13"(D)`,
        Description: "3-way Powered Studio Monitor with 8' LF Driver, 3.5' Midrange Driver, X-ART HF Driver, and Onboard DSP (each) - Right"
      },
      {
        model: "Beyerdynamic DT 770 Pro 250 ohm Closed-back Studio Mixing Headphones",
        price:  169 ,
        weight: "  .55lbs. ",
        dimensions:`"5(H) x 6"(W)x 3"(D)`,
        Description: "Closed Circumaural Studio Headphones"
      },
      {
        model: "PMC PMC 6-2",
        price: 10000,
        weight: "  47 lbs. ",
        dimensions:`15.7"(H) x 16.9"(W)x 14.6"(D)`,
        Description: "Powered Studio Monitor with 2 x 400W 150mm Woofers, 400W 55mm Midrange, and 400W 27mm Tweeter (pair)"
      },
      
]
//  const insertingStudio = async()=>{
//   await Studio.deleteMany({})
//     .then(()=>{
//       console.log('studio equipment has been cleared')
//     })
//     .catch((error)=>{
//       console.log('error deleting the studio equipment')
//     })
//   await Studio.insertMany(studioeq)
//     .then(()=> {
//       console.log(`Studio has been saved`)
//     })
//     .catch((error)=>{
//       console.log('Error saving users', error)
//     })
//  }
//  insertingStudio();
 

export {studioeq}