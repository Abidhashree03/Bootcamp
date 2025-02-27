export default function HelloWorld() {
import "./StudentCard.css";
import StudentCard from "./StudentCard";
export default function StudentCard({ name, major, year }) {
  return (
    <div className="student-card">
      <h2 className="student-name">name:Abidhashree{name}</h2>
      <p className="student-major">Major:IT {major}</p>
      <p className="student-year">Year:3rd {year}</p>
    </div>
  );
}
