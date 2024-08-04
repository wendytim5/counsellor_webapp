// src/pages/Dashboard.js
import React from 'react';
import '../styles/dashboard.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
import WordCloudComponent from '../components/WordCoud';
import Frame from '../images/Frame.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
        <div class="welcome-message">
        <div className="main-left">
        <span className="black-text">Welcome to </span>
        <span className="green-text">another</span>
        <span className="green-text">beautiful day!</span>
        <img src={Frame} alt="Mental Health" className="center-image" />
        <h3>Welcome to another day of counselling. Please feel free to choose  what you will like to another day of counselling</h3>
        <Link to="/createstudent" className="create-button">
        Create New Student Profile
        </Link>
        </div>
        
        <div className="main-right">
            <WordCloudComponent />
        </div>
    </div>
  </div>
  );
};

export default Dashboard;


