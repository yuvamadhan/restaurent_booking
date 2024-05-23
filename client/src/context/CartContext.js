import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [disabledItems, setDisabledItems] = useState([]);

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

  const toggleItemEnabled = (itemName) => {
    setDisabledItems((prevDisabledItems) => {
      if (prevDisabledItems.includes(itemName)) {
        return prevDisabledItems.filter((item) => item !== itemName);
      } else {
        return [...prevDisabledItems, itemName];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, disabledItems, toggleItemEnabled }}
    >
      {children}
    </CartContext.Provider>
  );
};
