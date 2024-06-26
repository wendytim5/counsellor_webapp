// src/components/Header.js
import React from 'react';
import '../styles/dashboard_header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-title">Mental Health</div>
      <button className="sign-out-button">Sign Out</button>
    </header>
  );
};

export default Header;
