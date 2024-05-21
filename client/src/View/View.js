import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './View.css';

const View = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="view-cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items-container">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.item_name} />
              <div className="item-details">
                <h3>{item.item_name}</h3>
                <p>Price: Rs.{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default View;
