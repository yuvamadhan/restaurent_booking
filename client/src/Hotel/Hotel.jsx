import React from 'react'
import './Hotel.css'
import chennai from '../Assets/Chennai.jpg'
import hydrabad from '../Assets/hydrabad.jpg'
import karnataka from '../Assets/karnataka.jpg'
import mumbai from '../Assets/mumbai.jpg'
import ahmedabad from '../Assets/ahmedabad.jpg'
import bhopal from '../Assets/bhopal.webp'
import delhi from '../Assets/delhi.jpg'
import indore from '../Assets/indore.jpg'
import kerala from '../Assets/kerala.jpg'
import kolkata from '../Assets/kolkata.jpg'
import lucknow from '../Assets/lucknow.jpg'
import pondicherry from '../Assets/pondicherry.jpg'
import pune from '../Assets/pune.webp'
import punjab from '../Assets/punjab.jpg'
import rajasthan from '../Assets/rajasthan.jpg'
import visakhapatnam from '../Assets/visakhapatnam.jpg'
function Hotel() {
  return (
    <div>
    <div className='cards'>
        <div className='c'>
         <a href="/chennai"> <img className='chennai' src={chennai} alt='chennai food'/></a>
          <span>chennai</span>
        </div>
        <div className='h'>
          <img className='hydrabad' src={hydrabad} alt='hydrabad food'/>
          <span>Hydrabad</span>
        </div>
        <div className='k'>
          <img className='karnataka' src={karnataka} alt='karnataka food'/>
          <span>Bengaluru</span>
        </div>
        <div className='m'>
          <img className='mumbai' src={mumbai} alt='mumbai food'/>
          <span>Mumbai</span>
        </div>      
    </div>
    <div className='card'>
    <div className='chennai-card'>
        <img className='chennai' src={delhi} alt='chennai food'/>
        <span>Delhi</span>
    </div>
    <div className='hydrabad-card'>
        <img className='hydrabad' src={ahmedabad} alt='hydrabad food'/>
        <span>Ahmedabad</span>
    </div>
    <div className='karnataka-card'>
        <img className='karnataka' src={punjab} alt='karnataka food'/>
        <span>Punjab</span>
    </div>
    <div className='mumbai-card'>
        <img className='mumbai' src={lucknow} alt='mumbai food'/>
        <span>Lucknow</span>
    </div>      
  </div>
  <div className='card'>
    <div className='chennai-card'>
        <img className='chennai' src={rajasthan} alt='chennai food'/>
        <span>Rajasthan</span>
    </div>
    <div className='hydrabad-card'>
        <img className='hydrabad' src={pune} alt='hydrabad food'/>
        <span>Pune</span>
    </div>
    <div className='karnataka-card'>
        <img className='karnataka' src={kolkata} alt='karnataka food'/>
        <span>Kolkata</span>
    </div>
    <div className='mumbai-card'>
        <img className='mumbai' src={indore} alt='mumbai food'/>
        <span>Indore</span>
    </div>      
  </div>
  <div className='card'>
    <div className='chennai-card'>
        <img className='chennai' src={visakhapatnam} alt='chennai food'/>
        <span>Visakhapatnam</span>
    </div>
    <div className='hydrabad-card'>
        <img className='hydrabad' src={kerala} alt='hydrabad food'/>
        <span>Kochi</span>
    </div>
    <div className='karnataka-card'>
        <img className='karnataka' src={bhopal} alt='karnataka food'/>
        <span>Bhopal</span>
    </div>
    <div className='mumbai-card'>
        <img className='mumbai' src={pondicherry} alt='mumbai food'/>
        <span>Pondicherry</span>
    </div>      
  </div>
</div>

      
  )
}

export default Hotel