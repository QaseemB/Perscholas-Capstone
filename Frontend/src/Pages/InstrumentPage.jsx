import React, { useEffect, useState } from 'react';
import axios from 'axios';

const imageMap = {
  "Akai Professional MPC X Standalone Sampler and Sequencer": "instruments/akaimpcx.jpg",
  "dx-7": "instruments/dx7.jpg",
  "Hammond SKX Pro Dual 61 Stage Keyboard/Organdx-": "instruments/hammondskx.jpg",
  "Epiphone Dave Grohl DG-335 Semi-hollowbody Electric Guitar - Pelham Blue": "instruments/Epiphone Dave Grohl.jpeg",
  "Yamaha MODX8+ 88 GHS-weighted Key Synthesizer": "instruments/Yamaha MODX8+ 88 GHS-.jpeg",
  "Moog One 16-voice Analog Synthesizer": "instruments/Moog One 16-voice.jpeg",
  "Novation MiniNova 37-key Synthesizer with Vocoder": "instruments/Novation MiniNova 37-key Synthesizer with Vocoder.jpeg",
  "Polyend Tracker+ 16-track Stereo Sampler, Drum Machine, and Synthesizer MonoPoly 4-voice Analog Synthesizer": "instruments/Polyend Tracker+ 16trks.jpeg",
  "Elektron Digitakt II 16-track Stereo Drum Computer and Sampler": "instruments/Elektron Digitakt .jpeg",
  "Roland V-Drums TD-17KVX Generation 2 Electronic Drum Set": "instruments/Roland V-Drums TD-17KVX Generation 2 Electronic Drum Set.jpeg",
  "Akai Professional MPC One+ Standalone Sampler and Sequencer": "instruments/Akai Professional MPC One+ Standalone Sampler and Sequencer.jpeg",
  "Erica Synths Perkons HD-01 Drum Machine and Rhythm Synthesizer - Black": "instruments/Erica Synths Perkons HD-01 Drum Machine and Rhythm Synthesizer - Black.jpeg",
  " Korg KR-11 Compact Rhythm Box": "instruments/Korg KR-11 Compact Rhythm Box.jpeg",
 
}

export const InstrumentPage = () => {
    const [instrument, setInstruments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstrument = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/instrument', {
                    withCredentials: true
                });
                console.log('Fetched instrument:', response.data); 
                setInstruments(response.data);
            } catch (error) {
                console.error("Error fetching studio data:", error);
            } finally {
                setLoading(false);
            }
 }
        fetchInstrument();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <h2 className="text-black text-center bg-red-500">Instument Page </h2>
        <h3 className="text-black text-center bg-red-500">Shopping Items</h3>
        <div className='grid grid-cols-5 gap-4 m-6'>
                {instrument.map((i) => (
                    <div className="product-display product-display bg-gradient-to-r from-gray-300 to-gray-100 p-4 rounded-lg shadow-lg w-64" key={i._id}>
                        <img src={imageMap[i.model]} alt={i.model} />
                        <div className="product-info">
                            {i.model} - ${i.price}
                            <button className='border-4 border-gray-600 bg-gray-300'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
        
      );
}

