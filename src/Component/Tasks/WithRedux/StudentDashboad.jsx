import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentDashboad = () => {
  const loggedInUser = useSelector((state) => state.auth.user);
  const students = useSelector((state) => state.students);
  const enrollments = useSelector((state) => state.enrollment);

  const studentRecord = students.find((s) => s.id === loggedInUser?.id);
  const myEnrollmentCount = enrollments.filter(
    (e) => e.studentId === loggedInUser?.id,
  ).length;

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1>Welcome, {loggedInUser?.name}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <strong style={{ fontSize: "24px" }}>{studentRecord?.marks ?? "-"}</strong>
          <div>Marks</div>
        </div>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <strong style={{ fontSize: "24px" }}>{myEnrollmentCount}</strong>
          <div>Enrolled Courses</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <Link to="/student/available-courses">Browse Available Courses</Link>
        <Link to="/student/my-course">View My Courses</Link>
        <Link to="/student/profile">Edit Profile</Link>
      </div>
    </div>
  );
};

export default StudentDashboad;
