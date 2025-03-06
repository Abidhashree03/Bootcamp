import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { fetchStudents } from "../api";
import "../styles/StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student._id} name={student.name} major={student.major} email={student.email} year={student.year} id={student._id} />
      ))}
    </div>
  );
};

export default StudentList;
