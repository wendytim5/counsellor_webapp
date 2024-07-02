import React from 'react';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';
import loginandregister from '../images/loginandregister.png';

function LoginPage() {
  return (
    <div className="register-page">
      <div className="register-content">
        <h2>Welcome Back!</h2>
        <h3>Enter your credentials to get started</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          
          <Link to="/dashboard">
          <button type="submit" className="signup-btn">Login</button>
        </Link>
        </form>
      </div>
      <div className="register-i">
       
        <img src={loginandregister} alt="Signup Image" className="background-i"/>
      </div>
    </div>
  );
}


export default LoginPage;
