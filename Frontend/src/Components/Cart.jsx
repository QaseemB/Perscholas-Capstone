import  { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [newItem, setNewItem] = useState({ _id: '', model: '', quantity: 1, price: 0 });
    useEffect(() => {
        fetchCart();
      }, []);

      const fetchCart = async () => {
        try {
          const response = await axios.get('https://perscholas-capstone.onrender.com/api/cart');
          console.log(response.data);
          setCart(response.data);
        } catch (error) {
          console.error('There was an error fetching the cart!', error);
        }
      };


      const addItem = async () => {
        try {
          let Product;
          const studioResponse = await axios.get(`https://perscholas-capstone.onrender.com/api/studio/${newItem._id}`);
          
          if (studioResponse.data && Object.keys(studioResponse.data).length !== 0) {
            Product = studioResponse.data;
          } else {
            const instrumentResponse = await axios.get(`https://perscholas-capstone.onrender.com/api/instrument/${newItem._id}`);
            
            if (instrumentResponse.data && Object.keys(instrumentResponse.data).length !== 0) {
              Product = instrumentResponse.data;
            } else {
              console.error('Product not found in both studio and instruments');
              return;
            }
          }
      
          const cartResponse = await axios.post('https://perscholas-capstone.onrender.com/api/cart', { 
            items: [{
              _id: Product._id,
              model: Product.model,
              quantity: newItem.quantity,
              price: Product.price
            }] 
          });
      
          setCart([...cart, cartResponse.data]);
          setNewItem({ _id: '', model: '', quantity: 1, price: 0 });
      
        } catch (error) {
          console.error('Error adding item to cart:', error);
        }
      };
      return (
        <div>
          <h1>Shopping Cart</h1>
          <div>
            <input
              type="text"
              placeholder="Product ID"
              value={newItem._id}
              onChange={(e) => setNewItem({ ...newItem, _id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Model"
              value={newItem.model}
              onChange={(e) => setNewItem({ ...newItem, model: e.target.value })}
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
            />
            <button onClick={addItem}>Add Item</button>
            <button onClick={fetchCart}>fetch</button>
          </div>
          <ul>
            {/* {cart.map(item => (
              <li key={item._id}>
                {item.model} - {item.quantity} x ${item.price}
                <button onClick={() => deleteItem(item._id)}>Delete</button>
                <button onClick={() => updateItem(item._id, { ...item, quantity: item.quantity + 1 })}>+</button>
                <button onClick={() => updateItem(item._id, { ...item, quantity: item.quantity - 1 })}>-</button>
              </li>
            ))} */}
          </ul>
        </div>
      );
    }


export {Cart}
    
    