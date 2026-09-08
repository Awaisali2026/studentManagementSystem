import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../store/Features/CourseSlice";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const enrollments = useSelector((state) => state.enrollment);

  const enrolledCount = enrollments.filter(
    (enrollment) => enrollment.courseId === course.id,
  ).length;

  const handleRemove = () => {
    if (enrolledCount > 0) {
      const confirmed = window.confirm(
        `${enrolledCount} student(s) are enrolled in "${course.title}". Delete anyway?`,
      );
      if (!confirmed) return;
    }
    dispatch(removeCourse(course.id));
  };

  return (
    <div className="card">
      <div className="card-title">
        <h3>Course Title : {course.title}</h3>
      </div>
      <div className="card-body">
        <p>Course Instructor: {course.instructor}</p>
      </div>
      <div className="category">
        <p>Course Category: {course.category}</p>
      </div>
      <div className="seats">
        <p>Available Seats: {course.seats === 0 ? "Full" : course.seats}</p>
      </div>
      {enrolledCount > 0 && (
        <p style={{ color: "#b8860b" }}>
          {enrolledCount} student(s) enrolled
        </p>
      )}
      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CourseCard;
