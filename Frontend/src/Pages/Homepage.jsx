
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const HomePage = () => {
  const [instruments, setInstruments] = useState([]);
  const [studio, setStudio]= useState([])
  const [user, setUser] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  

  useEffect(() => {

    const checkAuth = async () => {
      try {
        // Make a request to a protected route on your server
        const res = await axios.get('http://localhost:3000/api/auth/check', {
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
      const response = await axios.get('http://localhost:3000/api/instrument',{
        withCredentials: true
      }); // Fetch items from API
      setInstruments(response.data);
    };
    const fetchStudio = async () => {
        const response = await axios.get('http://localhost:3000/api/studio',{
          withCredentials: true
        }); // Fetch items from API
        setStudio(response.data);
      };
    // const fetchUsername = async (id) => {
    //     const res = await axios.get(`http://localhost:3000/api/users/${userId}`, {
    //         // headers: { Authorization: `Bearer ${token}` }
    //     })
    //     setUser(res.data)
    //   }
     
    fetchInstruments();
    fetchStudio();
    checkAuth();
    // fetchUsername();
    
  }, []);

  return (
    <div>
      <nav>
        <h1>My E-Commerce Store</h1>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        {!isAuthenticated ? <a href="/login">Login</a> : <span>Welcome Back {user ? user.name : 'User'}</span>}
      </nav>
      <h2>Shopping Items</h2>
      <ul>
      {instruments.slice(0, 2).map(i => (
  <li key={i._id}>
    {i.model} - ${i.price}
    <button>Add to Cart</button>
  </li>
))}
        {studio.slice(0, 2).map(s => (
  <li key={s._id}>
    {s.model} - ${s.price}
    <button>Add to Cart</button>
  </li>
))}
      </ul>
    </div>
  );
};


