import React from "react";
import "../styles/StudentCard.css";

const StudentCard = ({ name, id,major }) => {
  return (
    <div className="student-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf4wai_qO12kbHohf5ULtxw6z9LPPZsjwPi5MXUC3Wgk2pYadsLh253T-k3C7zro1bwA&usqp=CAU" alt="Student" className="student-img" />

      <h2>{name}</h2>
      <p><strong>Role:</strong> {major}</p>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
};

export default StudentCard;
