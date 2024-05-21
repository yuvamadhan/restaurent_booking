import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <h2 className='heading'>BOOK YOUR TABLE</h2>
        <nav className='nav'>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/hotel">Hotel</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header