// src/pages/Dashboard.js
import React from 'react';
import '../styles/dashboard.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
import Frame from '../images/Frame.png';
import Rectangle from '../images/Rectangle.png';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main className="App-main">
        <div class="welcome-message">
        <span className="black-text">Welcome to </span>
        <span className="green-text">another</span>
        <br />
        <span className="green-text">beautiful day!</span>
        </div>
      </main>
      <img src={Frame} alt="Mental Health" className="center-image" />
      <button className="create-button">Create New Student</button>
      <img src={Rectangle} alt="Mental Health" className="background-image" />
    </div>
  );
};

export default Dashboard;


