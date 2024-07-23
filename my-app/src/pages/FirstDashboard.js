// src/components/Dashboard.js
import React from 'react';
import '../styles/FirstDashboard.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <Header />
    <Sidebar />
    <div className="dashboard-container">
      <div className="button-container">
        <span className="button-label">Notes about students</span>
        <button className="dashboard-button">Button 1</button>
      </div>
      <div className="button-container">
        <span className="button-label">Assessments</span>
        <button className="dashboard-button">Button 2</button>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
