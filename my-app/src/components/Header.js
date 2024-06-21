import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-left">
        <h1 className="app-title">
          <span className="mental-health">MentalHealth</span> <span className="app">App</span>
        </h1>
      </div>
      <nav className="header-right">
        <Link to="#services">Services</Link>
        <Link to="#about">About Us</Link>
        <Link to="#contact">Contact Us</Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
