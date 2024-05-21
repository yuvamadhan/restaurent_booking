import React from 'react'
import Login from './Login/Login.jsx'
import Hotel from './Hotel/Hotel.jsx'
import Home from './Home/Home.jsx'
import Footer from './Footer/Footer.jsx'
import Chennai from './Cities/Chennai.jsx'
import Header from './Header/Header.jsx'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import BookingForm from './BookingForm/BookingForm.jsx'
import Profile from './Profile/Profile.jsx'
import Menu from './Menu/Menu.jsx'
import View from './View/View.js'
import { CartProvider } from './context/CartContext';

export const App = () => {
  return (
    <CartProvider>
      <Router>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/chennai" element={<Chennai/>}/>
        <Route path="/booking/:hotelName" element={<BookingForm/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      <Footer/>
    </Router>

    </CartProvider>
    
  )
}

export default App;