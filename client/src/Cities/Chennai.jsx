import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Chennai.css';
import a2b from '../Assets/a2b.jpg';
import saravana from '../Assets/saravana.jpg';
import copper from '../Assets/copper.webp';
import karaikal from '../Assets/karaikal.jpg';
import annalakshmi from '../Assets/annalakshmi.jpg';
import avartana from '../Assets/avartana.webp';
import crimson from '../Assets/crimson.jpg';
import patti from '../Assets/paati.jpg';
import salt from '../Assets/salt.jpg';
import seasonal from '../Assets/seasonal.jpg';

const hotels = [
  { name: 'A2B', img: a2b },
  { name: 'Saravana Bavan', img: saravana },
  { name: 'Copper Kitchen', img: copper },
  { name: 'Karaikal', img: karaikal },
  { name: 'Annalakshmi', img: annalakshmi },
  { name: 'Avartana', img: avartana },
  { name: 'Crimson Chakra', img: crimson },
  { name: 'Paati Veedu', img: patti },
  { name: 'C Salt', img: salt },
  { name: 'Seasonal Tastes', img: seasonal },
];

const Chennai = () => {
  const history = useNavigate();

  const handleHotelClick = (hotelName) => {
    history(`/booking/${hotelName}`);
  };

  return (
    <div className="hotel-list">
      <div className="hotels-container">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-box">
            <img src={hotel.img} alt={hotel.name} />
            <button onClick={() => handleHotelClick(hotel.name)}>{hotel.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chennai;
