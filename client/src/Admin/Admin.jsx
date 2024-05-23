import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Admin.css';

import briyani from '../Assets/briyani.jpeg';
import burger from '../Assets/burger.jpg';
import dosa from '../Assets/dosa.jpg';
import friedrice from '../Assets/friedrice.webp';
import idli from '../Assets/idli.jpg';
import noodles from '../Assets/noodles.webp';
import pasta from '../Assets/pasta.webp';
import pizza from '../Assets/pizza.jpeg';
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

const Admin = () => {
  const { addToCart } = useContext(CartContext);
  const [counts, setCounts] = useState(new Array(foodItems.length).fill(0));
  const [enabled, setEnabled] = useState(new Array(foodItems.length).fill(true));
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
    if (counts[index] > 0 && enabled[index]) {
      const item = { ...foodItems[index], count: counts[index] };
      addToCart(item);
      setCounts(new Array(foodItems.length).fill(0)); // Reset counts
    }
  };

  const toggleEnabled = (index) => {
    const newEnabled = [...enabled];
    newEnabled[index] = !newEnabled[index];
    setEnabled(newEnabled);
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
              <button onClick={() => toggleEnabled(index)}>
                {enabled[index] ? 'Disable' : 'Enable'}
              </button>
              {/* Show "Add to Cart" button only if the item is enabled */}
              {enabled[index] && (
                <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
