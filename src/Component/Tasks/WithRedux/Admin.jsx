import { useSelector } from "react-redux";

const Admin = () => {
  const students = useSelector((state) => state.students);
  const courses = useSelector((state) => state.courses);
  const enrollments = useSelector((state) => state.enrollment);

  const totalStudents = students.length;
  const totalCourses = courses.length;
  const totalEnrollments = enrollments.length;

  const studentsWithCourses = enrollments.reduce((ids, enrollment) => {
    if (!ids.includes(enrollment.studentId)) ids.push(enrollment.studentId);
    return ids;
  }, []).length;

  const stats = [
    { label: "Total Students", value: totalStudents },
    { label: "Total Courses", value: totalCourses },
    { label: "Total Enrollments", value: totalEnrollments },
    { label: "Students With a Course", value: studentsWithCourses },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>
              {stat.value}
            </div>
            <div style={{ color: "#666", marginTop: "6px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
