import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from './Login/Login.jsx';
import Hotel from './Hotel/Hotel.jsx';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';
import Chennai from './Cities/Chennai.jsx';
import Header from './Header/Header.jsx';
import BookingForm from './BookingForm/BookingForm.jsx';
import Profile from './Profile/Profile.jsx';
import Menu from './Menu/Menu.jsx';
import View from './View/View.js';
import { CartProvider } from './context/CartContext';
import Register from './Register/Register.jsx';
import Selection from './Selection/Selection.jsx';
import Adminlogin from './Adminlogin/Adminlogin.jsx';
import Admin from './Admin/Admin.jsx';

const HeaderWrapper = () => {
  const location = useLocation();
  const hideHeaderPaths = ['/', '/login', '/adminlogin','/register'];

  return !hideHeaderPaths.includes(location.pathname) ? <Header /> : null;
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <HeaderWrapper />
        <Routes>
          <Route path='/' element={<Selection />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/register' element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/chennai" element={<Chennai />} />
          <Route path="/booking/:hotelName" element={<BookingForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/view' element={<View />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
