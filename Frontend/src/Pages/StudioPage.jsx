import React, { useEffect, useState } from 'react';
import axios from 'axios';



const imageMap = {
  "Neve 1073OPX 8-channel Microphone Preamp with Remote Control Software": "studioequipment/neve1073preamp.jpg",
  "Avalon VT-737sp Tube Channel Strip": "studioequipment/avalonvt_737sp.jpg",
  "Universal Audio Teletronix LA-2A Classic Leveling Amplifier":"studioequipment/la2acomp.jpg",
  "Behringer 1273 2-channel Microphone Preamplifier and Equalizer":"studioequipment/Behringer 1273.jpeg",
  "Trident Audio Developments A-Range 500 Series Mic/Line/Instrument Preamp":"studioequipment/Trident A-Range 500 Series.jpeg",
  "Manley VOXBOX Tube Channel Strip":"studioequipment/Manley VOXBOX.jpeg",
  "ADAM Audio A8H-L 8-inch 3-way Powered Studio Monitor (Left)":"studioequipment/ADAM Audio A8H-L 8-inch 3-way.jpeg",
  "ADAM Audio A8H-L 8-inch 3-way Powered Studio Monitor (Right)":"studioequipment/ADAM Audio A8H-L 8-inch 3-way.jpeg",
  "Beyerdynamic DT 770 Pro 250 ohm Closed-back Studio Mixing Headphones":"studioequipment/Beyerdynamic DT 770.jpeg",
  "PMC PMC 6-2":"studioequipment/PMC PMC 6-2.jpeg",
}



export const StudioPage = () => {
    const [studio, setStudio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudio = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/studio', {
                    withCredentials: true
                });
                console.log('Fetched studio:', response.data); 
                setStudio(response.data);
            } catch (err) {
                console.error("Error fetching studio data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStudio();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <>
        <h2 className="text-black text-center bg-red-500">Studio equipment Page </h2>
        <h3 className="text-black text-center bg-red-500">Shopping Items</h3>
        <div className='grid grid-cols-5 gap-4 m-6'>
                {studio.map((s) => (
                    <div className="product-display bg-gradient-to-r from-gray-300 to-gray-100 p-2 rounded-lg shadow-lg w-64" key={s._id}>
                        <img src={imageMap[s.model]} alt={s.model} />
                        <div className="product-info">
                            {s.model} - ${s.price}
                            <button className='border-4 border-gray-600 bg-gray-300 p-2 '>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
        
      );
}

