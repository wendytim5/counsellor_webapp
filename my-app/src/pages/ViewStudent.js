import React, { useState, useEffect } from 'react';
import '../styles/ViewStudent.css';
import Header from '../components/dashboard_header';
import Sidebar from '../components/sidebar';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);

  // Simulate fetching data from database (replace with actual database call)
  useEffect(() => {
    const studentData = [
      {  id: 12345, name: 'John Smith', email: 'john.smith@school.edu', otherInfo: 'Grade: 10, GPA: 3.8' },
      { id: 54321,name: 'Jane Doe', email: 'jane.doe@school.edu', otherInfo: 'Grade: 12, Taking AP Calculus' },
      // ... add more student data
    ];
    setStudents(studentData);
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
            <th className="student">Student Name</th>
            <th>Email</th>
            <th>Other Information</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
               <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.otherInfo}</td>
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
