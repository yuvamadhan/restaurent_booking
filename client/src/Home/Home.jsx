import React from 'react'
import './Home.css'
import home_image from '../Assets/restaurants.jpg'
import how_image from '../Assets/howitworks.png'
import chennai from '../Assets/Chennai.jpg'
import hydrabad from '../Assets/hydrabad.jpg'
import karnataka from '../Assets/karnataka.jpg'
import mumbai from '../Assets/mumbai.jpg'

function Home() {
  return (
    <div>
      <div className="image-container">
        <img className='home-image' src={home_image} alt="Restaurant" />
        <div className="quote-overlay">
          <p className="quote">
            Experience the art of fine dining with just a click. Reserve your table now and indulge in an unforgettable culinary journey. From ambiance to flavor, your perfect evening starts here.
          </p>
        </div>
      </div>
      <div className='cards'>
        <div className='c'>
          <a href='/chennai'><img className='chennai' src={chennai} alt='chennai food'/></a>
          <span>chennai</span>
        </div>
        <div className='h'>
          <img className='hydrabad' src={hydrabad} alt='hydrabad food'/>
          <span>Hydrabad</span>
        </div>
        <div className='k'>
          <img className='karnataka' src={karnataka} alt='karnataka food'/>
          <span>Karnataka</span>
        </div>
        <div className='m'>
          <img className='mumbai' src={mumbai} alt='mumbai food'/>
          <span>Mumbai</span>
        </div>      
      </div>
      <div>
        <img className='howitworks' src={how_image} alt="how it works"/>
      </div>
      
    </div>
  )
}

export default Home