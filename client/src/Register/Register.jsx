import React, { useState } from 'react';
import email_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
//import user_icon from '../Assets/user.png'; 
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: ''
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/register", values)
      .then((res) => {
        console.log(res.data);
        alert('Registration successful');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response && error.response.status === 400) {
          alert('Registration failed. Please check your details and try again.');
        } else {
          alert('An error occurred. Please try again later.');
        }
      });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={email_icon} alt="User Icon" />
          <input type="text" placeholder="USERNAME" name="username" onChange={handleChange} />
        </div>
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="EMAIL" name="email" onChange={handleChange} />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="PASSWORD" name="password" onChange={handleChange} />
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">Register</button>
        </div>
      </form>
      <div className="forgot-password">Already have an account? <a href='/login'>Login here!</a></div>
    </div>
  );
};

export default Register;
