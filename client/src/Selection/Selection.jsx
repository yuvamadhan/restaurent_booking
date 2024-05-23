import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Selection.css'; 

const Selection = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    if (role === 'user') {
      navigate('/register');
    } else {
      navigate('/adminlogin');
    }
  };

  return (
    <div className="selection-container">
      <header className='header'>
        <h2 className='heading'>BOOK YOUR TABLE</h2>
      </header>
      <h2>Select your role</h2>
      <div className="buttons">
        <button onClick={() => handleSelection('admin')}>Admin</button>
        <button onClick={() => handleSelection('user')}>User</button>
      </div>
    </div>
  );
};

export default Selection;
