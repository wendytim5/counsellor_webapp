import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/dashboard';
import CreateStudent from './pages/CreateStudent';
import FirstDashboard from './pages/FirstDashboard';
import ViewStudent from './pages/ViewStudent';
import HomePage from './pages/HomePage';
import Notes from './components/Notes';
import StudentProfile from './pages/StudentProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/createstudent" element={<CreateStudent/>} />
          <Route path="/firstdashboard" element={<FirstDashboard/>} />
          <Route path="/viewstudent" element={<ViewStudent/>} />
          <Route path="/student/:id" element={<HomePage/>} />
          <Route path="/student/:id/notes" element={<Notes/>} />
          <Route path="/student/:id/profile" element={<StudentProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
