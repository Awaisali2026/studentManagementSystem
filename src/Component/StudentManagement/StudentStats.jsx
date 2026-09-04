import { useSelector } from "react-redux";
import {
  getTotalStudents,
  getTotalMarks,
  getAverageMarks,
  getHighestStudent,
} from "../utills/StudentsHelperFunctions.js";
function StudentStats() {
  const students = useSelector((state) => state.students);

  const totalStudents = getTotalStudents(students);
  const totalMarks = getTotalMarks(students);
  const averageMarks = getAverageMarks(students);
  const highestStudent = getHighestStudent(students);

  return (
    <section className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Total Students</span>
        <strong>{totalStudents}</strong>
        <span className="stat-icon blue">👥</span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Total Marks</span>
        <strong>{totalMarks}</strong>
        <span className="stat-icon purple">📊</span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Average Marks</span>
        <strong>{averageMarks.toFixed(1)}</strong>
        <span className="stat-icon green">📈</span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Top Student</span>
        <strong>{highestStudent ? highestStudent.name : "-"}</strong>
        <span className="stat-icon yellow">🏆</span>
      </div>
    </section>
  );
}

export default StudentStats;
