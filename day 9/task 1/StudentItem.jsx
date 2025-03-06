import React from "react";

const StudentItem = ({ id, name }) => {
  return (
    <li className="student-item">
      <strong>ID:</strong> {id} - <strong>Name:</strong> {name}
    </li>
  );
};

export default StudentItem;
