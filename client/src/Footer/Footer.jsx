import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h3>About Us</h3>
          <p>We are a premier restaurant booking service dedicated to providing a seamless dining experience for our customers.</p>
        </div>
        <div className='footer-section quick-links'>
          <h3>Quick Links</h3>
          <nav>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
        <div className='footer-section social-media'>
          <h3>Follow Us</h3>
          <ul className='social-media-list'>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className='footer-section newsletter'>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className='newsletter-form'>
            <input type='email' placeholder='Enter your email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Restaurant Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
