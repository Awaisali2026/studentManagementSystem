import { useDispatch } from "react-redux";
import { removeCourse } from "../store/Features/CourseSlice";

const CourseCard = ({ course }) => {

  const dispatch = useDispatch();

  
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
      <button className="remove-btn" onClick={() => dispatch(removeCourse(course.id))}>Remove</button>
    </div>
  );
};

export default CourseCard;
