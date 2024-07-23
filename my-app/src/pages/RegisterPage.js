import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RegisterPage.css';
import loginandregister from '../images/loginandregister.png';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState(''); // State to hold success/error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://musical-space-goldfish-jj4997jgr6jxh567w-5000.app.github.dev/register', formData)
      .then(response => {
        setMessage('User registered successfully');
      })
      .catch(error => {
        setMessage('There was an error registering!');
      });
  };

  return (
    <div className="register-page">
      <div className="register-content">
        <h2>Get started now</h2>
        <form onSubmit={handleSubmit}>
          <div className="register-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="register-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-signup-btn">Signup</button>
          <div className="or-divider">
            <span>or</span>
          </div>
          <p>Have an account already? <a href="/login">Sign in</a></p>
        </form>
        {message && <p className="message">{message}</p>} {/* Display message */}
      </div>
      <div className="register-image">
        <img src={loginandregister} alt="Signup " className="background-registerimage" />
      </div>
    </div>
  );
}

export default RegisterPage;
