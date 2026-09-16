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
    <div className="student-profile">
      <h1>My Profile</h1>

      <div className="profile-card">
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
          />

          <button type="submit">Save</button>

          {saved && <p className="success-message">Profile updated!</p>}
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;
