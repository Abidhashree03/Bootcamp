import React from "react";
import "./StudentCard.css";
import StudentCard from "./StudentCard";
export StudentContainer({ name, major, year }) => {
  return (
<div className="student-list">
      <h2 className="student-name">name:Abidhashree{name}</h2>
      <p className="student-major">Major:IT {major}</p>
      <p className="student-year">Year:3rd {year}</p>
    </div>
  );
}
export default StudentContainer()
