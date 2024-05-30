import React from 'react';
import './cookieButton.css';

const CookieButton = ({ onClick, label }) => {
  return (
    <button className="cookie-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CookieButton;
