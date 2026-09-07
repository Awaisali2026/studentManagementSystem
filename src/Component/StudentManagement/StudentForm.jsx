import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/Features/StudentSlice";
import { useNavigate } from "react-router";

function StudentForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || marks === "") {
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      marks: Number(marks),
    };

    dispatch(addStudent(newStudent));

    setName("");
    setMarks("");
    navigate("/admin/students")
  };

  return (
    <div className="form-Container">
      <section className="form-card">
        <div className="form-title">
          <h2>Add Student</h2>
          <p>Enter the student's information below.</p>
        </div>

        <form onSubmit={handleSubmit} className="student-form">
          <div className="input-group">
            <label htmlFor="name">Student Name</label>

            <input
              id="name"
              type="text"
              placeholder="e.g. Ali"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="marks">Marks</label>

            <input
              id="marks"
              type="number"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>

          <button type="submit" className="add-button">
            Add Student
          </button>
        </form>
      </section>
    </div>
  );
}

export default StudentForm;
