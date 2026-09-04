import { useDispatch } from "react-redux";
import {
  deleteStudent,
  increaseMarks,
} from "../store/Features/StudentSlice";

function StudentCard({ student }) {
  const dispatch = useDispatch();

  const passed = student.marks >= 50;

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="avatar">
          {student.name.charAt(0).toUpperCase()}
        </div>

        <div className="student-info">
          <h3>{student.name}</h3>
          <span>Student #{student.id}</span>
        </div>

        <span className={`status ${passed ? "pass" : "fail"}`}>
          {passed ? "Pass" : "Fail"}
        </span>
      </div>

      <div className="marks-section">
        <div>
          <span className="marks-label">Marks</span>
          <strong>{student.marks}</strong>
          <span className="out-of">/ 100</span>
        </div>

        <div className="progress">
          <div
            className={`progress-bar ${passed ? "pass-bar" : "fail-bar"}`}
            style={{ width: `${student.marks}%` }}
          />
        </div>
      </div>

      <div className="card-actions">
        <button
          className="increase-button"
          onClick={() => dispatch(increaseMarks(student.id))}
        >
          +5 Marks
        </button>

        <button
          className="delete-button"
          onClick={() => dispatch(deleteStudent(student.id))}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
