// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUserGraduate, FaBell, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        
      <div className="left">
        <div className="sidebar-section">
          <div className="sidebar-section-title">Main</div>
          <Link to="/homepage" className="sidebar-it">
            <FaTachometerAlt className="sidebar-icon" />
            Dashboard
          </Link>
          <Link to="/viewstudent" className="sidebar-it">
            <FaUserGraduate className="sidebar-icon" />
            View Students
          </Link>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Settings</div>
          <Link to="/notifications" className="sidebar-it">
            <FaBell className="sidebar-icon" />
            Notifications
          </Link>
          <Link to="/settings" className="sidebar-it">
            <FaCog className="sidebar-icon" />
            Settings
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;