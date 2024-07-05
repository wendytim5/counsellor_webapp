// src/components/StudentsTable.js
import React, { useState, useEffect } from 'react';
import '../styles/ViewStudent.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';
import axios from 'axios';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from the backend
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://congenial-telegram-qj9jxrggxjph9rr9-5001.app.github.dev/api/users');
        setStudents(response.data);
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="studentcontainer">
      <Header />
      <Sidebar />
      <div className="student-table-container">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th className="student">First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student._id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.country}</td>
                <td><a href="#">Edit</a></td>
                <td><a href="#">Delete</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;