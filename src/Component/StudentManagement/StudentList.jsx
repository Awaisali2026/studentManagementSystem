import { useSelector } from "react-redux";
import StudentCard from "../StudentManagement/StudentCard";

function StudentList({ filter, search }) {
  const students = useSelector((state) => state.students);

  const filteredStudents = students.filter((student) => {
    // Search by student name
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // Passed filter
    const matchesStatus =
      filter === "all" || (filter === "passed" && student.marks >= 50);

    return matchesSearch && matchesStatus;
  });

  if (filteredStudents.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>
        <h3>No students found</h3>
        <p>There are no students matching this filter.</p>
      </div>
    );
  }

  return (
    <div className="student-grid">
      {filteredStudents.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
