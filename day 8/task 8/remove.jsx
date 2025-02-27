import "./StudentList.css"; // Importing structured CSS

// StudentCard Component
import React, { useState } from "react";
// StudentCard component

// StudentCard component
const StudentCard = ({ student, onRemove }) => {
  return (
         <div className="student-name">
        <h2 className="student-name">{student.name}</h2>
        <p className="student-info">Major: {student.major}</p>
        <p className="student-info">Year: {student.year}</p>
        <button className="remove-button" onClick={() => onRemove(student.name)}>Remove</button>
        </div>
  );
};

// StudentList component
const StudentList = ({ initialStudents }) => {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState({ name: "", major: "", year: "" });

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addStudent = () => {
    if (newStudent.name && newStudent.major && newStudent.year) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", major: "", year: "" });
    }
  };

  const removeStudent = (name) => {
    setStudents(students.filter((student) => student.name !== name));
  };

  return (
    <div className="student-list-container">
      <input
        type="text"
        placeholder="Search students..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="add-student-form">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Major"
          value={newStudent.major}
          onChange={(e) => setNewStudent({ ...newStudent, major: e.target.value })}
        />
        <input
          type="text"
          placeholder="Year"
          value={newStudent.year}
          onChange={(e) => setNewStudent({ ...newStudent, year: e.target.value })}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="student-list">
        {filteredStudents.map((student, index) => (
          <StudentCard key={index} student={student} onRemove={removeStudent} />
        ))}
      </div>
    </div>
  );
};

// Example usage
const initialStudents = [
  { name: "Abidhashree", major: "Computer Science", year: "Senior" },
  { name: "Barnika", major: "Mathematics", year: "Junior" },
  { name: "vishnu", major: "Physics", year: "Sophomore" },
];

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Student List</h1>
      <StudentList initialStudents={initialStudents} />
    </div>
  );
};

export default App;
