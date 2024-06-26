// src/pages/Dashboard.js
import React from 'react';
import '../styles/dashboard.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main className="App-main">
        <h1 className="welcome-message">Welcome to another day</h1>
        <button className="create-button">Create New Student</button>
        <img className="center-image" src="path_to_your_image.jpg" alt="Centered" />
      </main>
    </div>
  );
};

export default Dashboard;


