// src/components/Header.js
import React from 'react';
import '../styles/dashboard_header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-left">
        <h1 className="app-title">
          <span className="mental-health">MentalHealth</span> <span className="app">App</span>
        </h1>
      </div>
      <nav className="header-right">
        <Link to="#contact">Contact Us
        <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </Link>
        <Link to="#services">View Profile
        <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
        </Link>
        <Link to="/">
          <button className="singout-btn">Signout
            <FontAwesomeIcon icon={faArrowRight} className="dropdown-icon" />
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
