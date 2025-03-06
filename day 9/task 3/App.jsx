import React from "react";
import StudentList from "./components/StudentList";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Student List</h1>
      <StudentList />
    </div>
  );
}

export default App;
