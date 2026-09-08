import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, increaseMarks } from "../store/Features/StudentSlice";
import { useState } from "react";

function StudentCard({ student }) {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const courses = useSelector((state) => state.courses);
  const enrollments = useSelector((state) => state.enrollment);

  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const selectedStudent = students.find(
    (data) => data.id === selectedStudentId,
  );

  const courseForSelectedStudent = selectedStudent
    ? enrollments
        .filter((enrollData) => enrollData.id === selectedStudentId)
        .map((data) => courses.find((c) => c.id === data.courseId))
        .filter(Boolean)
    : [];

  
  const passed = student.marks >= 50;

  console.log(selectedStudentId)
  console.log(courseForSelectedStudent)

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="avatar">{student.name.charAt(0).toUpperCase()}</div>

        <div className="student-info">
          <button className="btn-select" onClick={() => setSelectedStudentId(student.id)}>
            <h3>{student.name}</h3>
            <span>Student #{student.id}</span>
          </button>
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
