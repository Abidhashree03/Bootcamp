import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import "./StudentList.css";const StudentCard = ({ student }) => {
  const yearColors = {
    Fresher: "freshman",
    Junior: "junior",
    Sophomore: "Sophomor",
  };

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Major: {student.major}</p>
      <p>Year: {student.year}</p>
    </div>
  );
};

// StudentList Component
const StudentList = ({ students }) => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

// Example Usage
const studentsData = [
  { name: "Alice Johnson", major: "Chemistry", year: "Fresher" },
  { name: "Bob Smith", major: "Mathematics", year: "Senior" },
  { name: "Charlie Brown", major: "Physics", year: "Junior" }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student list</h1>
      <StudentList students={studentsData} />
    </div>
  );
};

export default App;
