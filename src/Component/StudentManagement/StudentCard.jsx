import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  increaseMarks,
  ToggleActiveStudent,
} from "../store/Features/StudentSlice";
import { useState } from "react";

function StudentCard({ student }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const enrollments = useSelector((state) => state.enrollment);

  const [showCourses, setShowCourses] = useState(false);

  const enrolledCourses = enrollments
    .filter((enrollment) => enrollment.studentId === student.id)
    .map((enrollment) => courses.find((c) => c.id === enrollment.courseId))
    .filter(Boolean);

  const passed = student.marks >= 50;

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="avatar">{student.name.charAt(0).toUpperCase()}</div>

        <div className="student-info">
          <button
            className="btn-select"
            onClick={() => setShowCourses((prev) => !prev)}
          >
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

      <div className="active-status" style={{ margin: "10px 0" }}>
        <span
          style={{
            padding: "3px 10px",
            borderRadius: "12px",
            fontSize: "12px",
            color: "white",
            backgroundColor: student.active ? "#28a745" : "#6c757d",
          }}
        >
          {student.active ? "Active" : "Inactive"}
        </span>
      </div>

      {showCourses && (
        <div className="enrolled-courses" style={{ marginBottom: "10px" }}>
          <strong>Enrolled Courses:</strong>
          {enrolledCourses.length === 0 ? (
            <p>No courses enrolled.</p>
          ) : (
            <ul>
              {enrolledCourses.map((course) => (
                <li key={course.id}>
                  {course.title} — {course.instructor}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="card-actions">
        <button
          className="increase-button"
          onClick={() => dispatch(increaseMarks(student.id))}
        >
          +5 Marks
        </button>

        <button
          className="toggle-active-button"
          onClick={() => dispatch(ToggleActiveStudent(student.id))}
        >
          {student.active ? "Deactivate" : "Activate"}
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
