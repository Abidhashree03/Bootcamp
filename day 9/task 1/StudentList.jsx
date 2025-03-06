import React, { useState, useEffect } from "react";
import StudentItem from "./StudentItem";
import "../styles/StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/students") // Replace with actual API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <ul className="student-list">
        {students.map((student) => (
          <StudentItem key={student.id} id={student.id} name={student.name} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
