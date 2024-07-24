import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import loginandregister from '../images/loginandregister.png';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://musical-space-goldfish-jj4997jgr6jxh567w-5000.app.github.dev/login', formData)
      .then(response => {
        setMessage('Login successful');
        // Save the token (optional) and redirect to the dashboard
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch(error => {
        setMessage('Invalid email or password');
      });
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <h2>Welcome Back!</h2>
        <h3>Enter your credentials to get started</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
          <div className="form-group">
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
          <button type="submit" className="signup-btn">Login</button>
        </form>
        {message && <p className="message">{message}</p>} {/* Display message */}
      </div>
      <div className="login-i">

        <img src={loginandregister} alt="Signup Image" className="background-i" />
        
      </div>
    </div>
  );
}

export default LoginPage;
