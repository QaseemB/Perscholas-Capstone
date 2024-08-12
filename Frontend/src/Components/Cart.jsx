import  { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [newItem, setNewItem] = useState({ _id: '', model: '', quantity: 1, price: 0 });
    useEffect(() => {
        fetchCart();
      }, []);

      const fetchCart = async () => {
        const response = await axios.get('http://localhost:3000/api/cart')
        .then(res => {
          console.log(res.data);
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
        // setCart(response.data);
      }
      const addItem = async () => {
        try {
          const studioResponse = await axios.get(`http://localhost:3000/api/instrument/${newItem._id}`);
          // const studioProduct = studioResponse.data;
          const instrumentResponse = await axios.get(`http://localhost:3000/api/instrument/${newItem._id}`);
          // const InstrumentProduct = instrumentResponse.data
          const Product = studioResponse.data || instrumentResponse.data;
          const cartResponse = await axios.post('http://localhost:3000/api/cart', { 
            items:[ {
            _id: Product._id,
            model: Product.model,
            quantity: newItem.quantity,
            price: Product.price
          }] });
        setCart([...cart, cartResponse.data]);
        setNewItem({ _id: '', model: '', quantity: 1, price: 0 });
        }catch (error) {
          console.error('Error adding item to cart:', error);
        
      };
      const updateItem = async (id, updatedItem) => {
        const response = await axios.put(`http://localhost:3000/api/cart/:${id}`, { items: [updatedItem] });
        setCart(cart.map(item => (item._id === id ? response.data : item)));
      };
      const deleteItem = async (id) => {
        await axios.delete(`http://localhost:3000/api/cart/${id}`);
        setCart(cart.filter(item => item._id !== id));
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
            {cart.map(item => (
              <li key={item._id}>
                {item.model} - {item.quantity} x ${item.price}
                <button onClick={() => deleteItem(item._id)}>Delete</button>
                <button onClick={() => updateItem(item._id, { ...item, quantity: item.quantity + 1 })}>+</button>
                <button onClick={() => updateItem(item._id, { ...item, quantity: item.quantity - 1 })}>-</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export {Cart}
    
    