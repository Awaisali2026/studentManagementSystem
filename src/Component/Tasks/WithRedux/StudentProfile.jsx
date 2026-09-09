import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentName } from "../../store/Features/StudentSlice";
import { updateUserName } from "../../store/Features/AuthSlice";

const StudentProfile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.user);
  const students = useSelector((state) => state.students);

  const studentRecord = students.find((s) => s.id === loggedInUser?.id);

  const [name, setName] = useState(studentRecord?.name || "");
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(updateStudentName({ id: loggedInUser.id, name: name.trim() }));
    dispatch(updateUserName(name.trim()));

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!loggedInUser || !studentRecord) {
    return <p>No profile data found.</p>;
  }

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h1>My Profile</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <p>
          <strong>Student ID:</strong> {studentRecord.id}
        </p>
        <p>
          <strong>Email:</strong> {loggedInUser.email}
        </p>

        <form onSubmit={handleSave}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: "block", width: "100%", margin: "8px 0" }}
          />
          <button type="submit">Save</button>
          {saved && <p style={{ color: "green" }}>Profile updated!</p>}
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;
