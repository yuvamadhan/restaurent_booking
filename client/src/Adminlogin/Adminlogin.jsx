import React, { useState } from 'react';
import email_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import axios from 'axios';
import './Adminlogin.css';
import {useNavigate} from 'react-router-dom';

const Adminlogin = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
const navi= useNavigate()

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/login", values)
      .then((res) => {
        console.log(res.data);
        alert('login sucessful');
        navi('/admin');
        
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response && error.response.status === 401) {
          alert('Invalid username or password');
        } else {
          alert('An error occurred. Please try again later.');
        }
      });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="text" placeholder="USERNAME" name="username" onChange={handleChange} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="PASSWORD" name="password" onChange={handleChange} />
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>
      <div className="forgot-password">No Account? <a href='/register'>click here!</a></div>

    </div>
  );
};

export default Adminlogin;
