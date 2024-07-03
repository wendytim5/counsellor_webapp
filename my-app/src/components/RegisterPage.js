import React from 'react';
import '../styles/RegisterPage.css';
import loginandregister from '../images/loginandregister.png';

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="register-content">
        <h2>Get started now</h2>
        <form>
          <div className="register-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="register-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="register-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="register-signup-btn">Signup</button>
        
        <div className="or-divider">
          <span>or</span>


        </div>
        <p>Have an account already? <a href="/login">Sign in</a></p>
        </form>
      </div>
      <div className="register-image">
        {/* Replace with your image import or URL */}
        <img src={loginandregister} alt="Signup " className="background-image"/>
      </div>
    </div>
    
    
  );
}

export default RegisterPage;
