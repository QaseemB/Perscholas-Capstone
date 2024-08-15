
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const HomePage = () => {
  const [instruments, setInstruments] = useState([]);
  const [studio, setStudio] = useState([]);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

    const checkAuth = async () => {
      try {
        // Make a request to a protected route on your server
        const res = await axios.get('https://perscholas-capstone.onrender.com/api/auth/check', {
          withCredentials: true 
        });
        setIsAuthenticated(true);
        setUser(res.data.user);
        console.log(res.data.user)
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
      }
    };
    const fetchInstruments = async () => {
      const response = await axios.get('https://perscholas-capstone.onrender.com/api/instrument',{
        withCredentials: true
      }); // Fetch items from API
      setInstruments(response.data);
    };
    const fetchStudio = async () => {
        const response = await axios.get('https://perscholas-capstone.onrender.com/api/studio',{
          withCredentials: true
        }); // Fetch items from API
        setStudio(response.data);
      };
      const fetchData = async () => {
        await Promise.all([fetchInstruments(), fetchStudio(), checkAuth()]);
        setLoading(false); // Set loading to false after all data is fetched
      };
  
      fetchData();
    }, []);
    if (loading) {
      return <div>Loading...</div>; // Render loading state
    }
  

  return (
    <>
    <h2 className='WelcomeBack bg-red-500'>Welcome Back {user ? user.name : 'User'}</h2>
    <h3 className="bg-red-500">Shopping Items</h3>
   <div className='homeDiv'>
  <div className="product-display">
    <img src="/instruments/akaimpcx.jpg" alt="Akai MPC X" />
    <div className="product-info">
      {instruments[0].model} - ${instruments[0].price}
      <button className='addToCart text-black'>Add to Cart</button>
    </div>
  </div>

  <div className="product-display">
    <img src="/instruments/dx7.jpg" alt="DX7" />
    <div className="product-info">
      {instruments[1].model} - ${instruments[1].price}
      <button className='addToCart text-black'>Add to Cart</button>
    </div>
  </div>

  <div className="product-display">
    <img src="/studioequipment/neve1073preamp.jpg" alt="Neve 1073 Preamp" />
    <div className="product-info">
      {studio[0].model} - ${studio[0].price}
      <button className='addToCart text-black'>Add to Cart</button>
    </div>
  </div>

  <div className="product-display">
    <img src="/studioequipment/avalonvt_737sp.jpg" alt="Avalon VT-737SP" />
    <div className="product-info">
      {studio[1].model} - ${studio[1].price}
      <button className='addToCart text-black'>Add to Cart</button>
    </div>
  </div>
</div>
    </>
    
  );
};


