import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/LandingPage.css';
import background from '../images/background.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main className="App-main">
        <div className="main-left">
          <h2>Welcome to Our Mental Health App</h2>
          <h3>Mental health apps offer tools to help people assess, prevent, support, and regulate their mental health well-being. When choosing a mental health app,
             you can consider factors like whether it's evidence-based and easy to use.</h3>
        </div>
        <div className="main-right">
          <img src={background} alt="Mental Health" className="background-image" />
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
