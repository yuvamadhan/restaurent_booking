import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await axios.post('http://localhost:8000/cart', {
        item_name: item.name,
        quantity: item.count,
        price: parseFloat(item.price.replace('Rs.', '')),
        img: item.img,
      });
      setCart([...cart, response.data]);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/cart/${id}`);
      setCart(cart.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
