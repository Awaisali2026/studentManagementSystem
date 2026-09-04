import { useState } from "react";

const AddStudent = ({ onAddStudent }) => {
  const [nameText, setNameText] = useState("");
  const [marks, setMarks] = useState(0);

  const handleSubmit = () => {

    onAddStudent(nameText, marks);

    setNameText("");
    setMarks(0);
  };
  return (
    <div>
      <h3>Add new Student </h3>

      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Student Name"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
          required
        />

        <label htmlFor="marks">Marks: </label>
        <input
          type="number"
          name="marks"
          id="marks"
          placeholder="Enter Student Marks "
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          min={0}
          max={100}
        />

        <button type="button" onClick={() => handleSubmit()}>Add Student </button>
      </form>
    </div>
  );
};

export default AddStudent;
