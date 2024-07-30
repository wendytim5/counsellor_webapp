// src/components/StudentProfileForm.js
import React, { useState } from 'react';
import '../styles/CreateStudent.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
import axios from 'axios';

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    country: '',
    age:'',
    year_group:''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/api/users', formData);
      console.log('User created:', response.data);
      setSuccessMessage('User created successfully!');

       // Refresh the page after a short delay
       setTimeout(() => {
        window.location.reload();
      }, 1000); // Delay in milliseconds (1 second)
  
   
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', err.response.data);
      } else if (err.request) {
        // Request was made but no response received
        console.error('Error request:', err.request);
      } else {
        // Something else happened
        console.error('Error message:', err.message);
      }
      console.error('Error creating user:', err);
    }
  };
  

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form className="student-profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year_group">Year Group</label>
          <input
            type="text"
            id="year_group"
            name="year_group"
            value={formData.year_group}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};
export default StudentProfileForm;
