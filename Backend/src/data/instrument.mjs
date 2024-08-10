

const instrumentTest = [
  {
  
    model: "Akai Professional MPC X Standalone Sampler and Sequencer",
    price: 2499,
    weight: "12.5 lbs",
    dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`,
    Description: "Hybrid Standalone Hardware DAW with Software Integration, 10.1' Multi-touch Screen, 16 Velocity-/Pressure-Sensitive Pads, Extensive Control I/O (MIDI, CV/Gate, USB), 48GB Storage, and MPC Internal Software - Special Edition"
  
  },
  {
    
    model: "dx-7",
    price: 1500,
    weight: `14.2kg`,
    dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`,
    Description: " polyphonic, had a five-octave touch-sensitive keyboard, and offered a wide choice of timbres, which the player could adjust or change to suit his requirements."
  },
  {
 
    model: "Hammond SKX Pro Dual 61 Stage Keyboard/Organdx-",
    price: 3995,
    weight: "37.25lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
    Description: "2 x 61-key Virtual Tonewheel Organ Keyboard with Organ, Piano/Ensemble, and Mono Synth Voices, Digital Leslie, Overdrive, and DSP Multi-effects"
  },
  {
    
    model: "Epiphone Dave Grohl DG-335 Semi-hollowbody Electric Guitar - Pelham Blue",
    price: 1299,
    weight: "8lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
    Description: "Semi-hollowbody Electric Guitar with Maple Top, Back, and Sides, Mahogany Neck, Laurel Fingerboard, and 2 Humbucking Pickups - Pelham Blue",
    neck: "45"
   
  },

  {
   
    model: "Yamaha MODX8+ 88 GHS-weighted Key Synthesizer",
    price:  2199,
    weight: "37.25lbs",
    dimensions:`6.3" (H) x 52.5"(W)x 15.9"(D)`,
    Description: "88-key Synthesizer with GHS-weighted Action, 256-note Total Polyphony, AWM2 and FM-X Sound Engines, DAW and VST Control, Sequencer, Virtual Circuitry Modeling, and 1.75GB Internal Flash Memory"
  },
  {

    model: "Moog One 16-voice Analog Synthesizer",
    price:  9999,
    weight: "45lbs",
    dimensions:`7.20" (H) x 42"(W)x 20"(D)`,
    Description: "61-key, 16-voice Programmable, Tri-timbral Analog Synthesizer with 3 Voltage-Controlled Oscillators, 2 Independent Analog Filters, 4 LFOs, 3 Envelope Generators, Arpeggiator, Sequencer, Onboard Effects and Eventide Reverb Suite, and CV I/O"
  },

  {

    model: "Novation MiniNova 37-key Synthesizer with Vocoder",
    price: 399,
    weight: "37.25lbs",
    dimensions:`2.95" (H) x 23.2"(W)x 9"D)`,
    Description: "37-mini-key Synthesizer/Vocoder and USB Controller with Realtime Performance Controls, 14 Filter Types, 6 Envelope Generators, 3 LFOs, and Gooseneck Mic"
  },

  {
    model: "Polyend Tracker+ 16-track Stereo Sampler, Drum Machine, and Synthesizer MonoPoly 4-voice Analog Synthesizer",
    price: 799,
    weight: "2.65lbs",
    dimensions:`1.3""(H) x 11""(W)x 8""(D)`,
    Description: "16-track Drum Machine, Sequencer, Sampler, and Synthesizer, with 4,000 Samples, and 6 Synthesis Modes"
  },

  {
    model: "Elektron Digitakt II 16-track Stereo Drum Computer and Sampler",
    price:  999,
    weight: "3lbs",
    dimensions:`2.5" (H) x 8.5"(W)x 7.2"(D)`,
    Description: "16-track Stereo Drum Machine, Sampler, and Groove Sequencer, with Variable Track Modes, Sample Library, Per-track Modulation, 128-step Sequencer, FX, Euclidean Sequence Generator, Swappable Filters, 4 x Trigger Mode, 5-pin MIDI In/Out/Thru, Stereo Audio I/O, Headphone Out, USB-B,"
  },

  {

    model: "Roland V-Drums TD-17KVX Generation 2 Electronic Drum Set",
    price: 3995,
    weight: "37.25lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
    Description: "5-piece Electronic Drum Set with 12' Snare, Kick Tower, 3 x 8' Toms, 2 x 12' Crash Cymbals, 14' Ride Cymbal, 10' Hi-Hats, and 2nd Gen TD-17 Sound Module"
  },

  {

    model: "Akai Professional MPC One+ Standalone Sampler and Sequencer",
    price:  699,
    weight: "4lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
    Description: ""
  },

  {
    model: "Erica Synths Perkons HD-01 Drum Machine and Rhythm Synthesizer - Black",
    price:  2059,
    weight: "8.15lbs",
    dimensions:`3.20" (H) x 17.5"(W)x 12.44"(D)`,
    Description: "Erica Synths Perkons HD-01 Drum Machine and Rhythm Synthesizer - Black"
  },

  {
    model: " Korg KR-11 Compact Rhythm Box",
    price:  119,
    weight: "9.25lbs",
    dimensions:`1.20" (H) x 6"(W)x 4.66"(D)`,
    Description: "16-pad Drum Machine with 126 Patterns, 14 User Preset Slots, Velocity Sensitivity, Tap Tempo, 2 x 1/4' Footswitch In, 3.5mm Audio Out, and Onboard Speakers"

  },
];


// const storingInstruments = async () =>{
//   await Instruments.deleteMany({})
//    .then(()=>{
//      console.log("Instruments has been cleared")
//    })
//    .catch((error)=>{
//      console.log('error deleting the Instruments')
//    })
//  await Instruments.insertMany(instrumentTest)
//    .then(()=> {
//     console.log('Instruments has been saved')
//      })
//    .catch ((error)=>{
//    console.error('Error saving Instruments', error)
//  });
//  }

//  storingInstruments();
export {instrumentTest}