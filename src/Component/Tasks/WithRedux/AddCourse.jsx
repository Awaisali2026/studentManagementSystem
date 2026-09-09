import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../store/Features/CourseSlice";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [instructor, SetInstructor] = useState("");
  const [category, setCategory] = useState("");
  const [seats, setSeats] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleAddCourse = (e) => {
    e.preventDefault();

    if (!title || !instructor || !category || !seats)
      return setError("All Field are Required!");

    const newCourse = {
      id: Date.now(),
      title: title,
      instructor: instructor,
      category: category,
      seats: Number(seats)
    };

    dispatch(addCourse(newCourse));
    setError("");
    setTitle("");
    setCategory("");
    setSeats("");
    SetInstructor("");
  };
  return (
    <div className="add-course-container">
      <h2>Add New Course </h2>
      <form className="form" onSubmit={handleAddCourse}>
        <label htmlFor="title">Course Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Course Name: "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="instructor">Course instructor</label>
        <input
          type="text"
          name="instructor"
          id="instructor"
          placeholder="Enter Course instructor: "
          value={instructor}
          onChange={(e) => SetInstructor(e.target.value)}
        />

        <label htmlFor="Category">Course Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="Category"
          id="Category"
        >
          <option value="frontend" selected>Front-End</option>
          <option value="backend">Back-End</option>
          <option value="react">React</option>
          <option value="Programming">Programming</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="seats">Course Seats</label>
        <input
          type="number"
          name="seats"
          id="seats"
          placeholder="Enter Seats: "
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />

        <button type="submit">Add Course </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default AddCourse;
