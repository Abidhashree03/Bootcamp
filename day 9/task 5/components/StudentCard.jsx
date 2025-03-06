import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ image, name, major, year }) => {
  const getBackgroundColor = (year) => {
    const yearColors = {
      "2022 - 2026": "green",
      "2021 - 2025": "yellow",
      "2020 - 2024": "blue",
      "2019 - 2023": "red",
    };
    return yearColors[year] || "gray";
  };

  return (
    <div className="student-card" style={{ backgroundColor: getBackgroundColor(year) }}>
      
      <h2>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
};

export default StudentCard;
