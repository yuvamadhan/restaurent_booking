import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Menu.css';

import dosa from '../Assets/dosa.jpg';
import idli from '../Assets/idli.jpg';
import briyani from '../Assets/briyani.jpeg';
import pasta from '../Assets/pasta.webp';
import pizza from '../Assets/pizza.jpeg';
import burger from '../Assets/burger.jpg';
import friedrice from '../Assets/friedrice.webp';
import noodles from '../Assets/noodles.webp';
import salad from '../Assets/salad.jpg';
import soup from '../Assets/soup.jpeg';

const foodItems = [
  { name: 'Dosa', img: dosa, price: 'Rs.50' },
  { name: 'Idli', img: idli, price: 'Rs.40' },
  { name: 'Biryani', img: briyani, price: 'Rs.160' },
  { name: 'Pasta', img: pasta, price: 'Rs.110' },
  { name: 'Pizza', img: pizza, price: 'Rs.150' },
  { name: 'Burger', img: burger, price: 'Rs.130' },
  { name: 'Fried Rice', img: friedrice, price: 'Rs.120' },
  { name: 'Noodles', img: noodles, price: 'Rs.120' },
  { name: 'Salad', img: salad, price: 'Rs.100' },
  { name: 'Soup', img: soup, price: 'Rs.90' },
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [counts, setCounts] = useState(new Array(foodItems.length).fill(0));
  const navigate = useNavigate();

  const incrementCount = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const decrementCount = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setCounts(newCounts);
    }
  };

  const handleAddToCart = (index) => {
    if (counts[index] > 0) {
      const item = { ...foodItems[index], count: counts[index] };
      addToCart(item);
      setCounts(new Array(foodItems.length).fill(0)); // Reset counts
    }
  };

  const handleViewCart = () => {
    navigate('/view');
  };

  return (
    <div className="food-list">
      <button className="view-cart-button" onClick={handleViewCart}>View Cart</button>
      <div className="foods-container">
        {foodItems.map((food, index) => (
          <div key={index} className="food-box">
            <img src={food.img} alt={food.name} />
            <div className="food-details">
              <h3>{food.name}</h3>
              <p>Price: {food.price}</p>
              <div className="count-container">
                <button onClick={() => decrementCount(index)}>-</button>
                <span>{counts[index]}</span>
                <button onClick={() => incrementCount(index)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
