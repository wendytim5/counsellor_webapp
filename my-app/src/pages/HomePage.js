import React from 'react';
import '../styles/HomePage.css';
import { FaStickyNote, FaFileAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
function Dashboard() {
  return (
    <div class="Homepage">
    <Header/>
    <Sidebar/>
    <div className="dashboard-container">
      <div className="dashboard-item">
        <Link to="/notes" className="sidebar-item">
        <FaStickyNote className="material-icons" />
            Notes about students
        </Link>
      </div>
      <div className="dashboard-item">
        <Link to="/homepage" className="sidebar-item">
            <FaFileAlt className="material-icons" />
            Assessments
        </Link>
      </div>
      <div className="dashboard-item">
        <Link to="/homepage" className="sidebar-item">
             <FaUserCircle className="material-icons" />
                View Student Profile
            </Link>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
