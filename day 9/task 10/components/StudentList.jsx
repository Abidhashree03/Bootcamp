import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch student data
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
    setLoading(false);
  };

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
    
    // Auto refresh every 30 seconds
    const interval = setInterval(fetchStudents, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={fetchStudents} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh"}
      </button>
      <div className="student-list">
        {students.map((student) => (
          <div key={student._id} className="student-card">
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
