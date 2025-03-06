import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ name, id,major }) => {
  return (
    <div className="student-card">
      {/* <img src="https://tse3.mm.bing.net/th?id=OIP.6NivW0DzXMg9URlZ2Ca_qAHaE7&pid=Api&P=0&h=180" alt="Student" className="student-img" />
       */}
      <h2>{name}</h2>
      <p><strong>Role:</strong> {major}</p>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
};

export default StudentCard;
