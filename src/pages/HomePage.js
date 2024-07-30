import React from 'react';
import '../styles/HomePage.css';
import { FaStickyNote, FaFileAlt, FaUserCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';

const Dashboard =() => {

  const { id } = useParams(); 
  return (
    <div class="Homepage">
    <Header/>
    <Sidebar/>
    <div className="dashboard-container">
      <div className="dashboard-item">
        <Link to={`/student/${id}/notes`} className="sidebar-item">
        <FaStickyNote className="material-icons" />
            Notes about student
        </Link>
      </div>
      <div className="dashboard-item">
        <Link to="/homepage" className="sidebar-item">
            <FaFileAlt className="material-icons" />
            Objective Assessments
        </Link>
      </div>
      <div className="dashboard-item">
        <Link to={`/student/${id}/profile`} className="sidebar-item">
             <FaUserCircle className="material-icons" />
                View Student Profile
            </Link>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
