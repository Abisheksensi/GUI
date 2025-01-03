import React from 'react';
import './button.css'; // Import the CSS file for styling

const Button = ({ text, onClick, styleType = 'primary' }) => {
  return (
    <button className={`button ${styleType}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
