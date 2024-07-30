import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
import axios from 'axios';


const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`https://musical-space-goldfish-jj4997jgr6jxh567w-3009.app.github.dev/api/student/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudent();
  }, [id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="student-profile-container">
      <Header />
      <Sidebar />
      <div className="student-profile-content">
        <h1>{student.first_name} {student.last_name}'s Profile</h1>
        <p>Email: {student.email}</p>
        <p>Country: {student.country}</p>
      </div>
    </div>
  );
};

export default StudentProfile;

