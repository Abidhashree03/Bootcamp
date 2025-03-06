import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from backend
    axios.get("http://localhost:3000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Student List</h1>
      <StudentList students={students} setStudents={setStudents} />
    </div>
  );
}

export default App;
