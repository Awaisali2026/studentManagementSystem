import { useDispatch, useSelector } from "react-redux";
import {dropCourse} from "../../store/Features/EnrollSlice"

import {
  IncrementSeat,
} from "../../store/Features/CourseSlice";

function MyCourses() {
  const dispatch = useDispatch();

  const loggedInStudent = useSelector(
    (state) => state.auth?.user
  );

  const courses = useSelector(
    (state) => state.courses
  );

  const enrollments = useSelector(
    (state) => state.enrollment
  );

  const studentId =
    loggedInStudent?.id


  const myEnrollments = enrollments.filter(
    (enrollment) =>
      enrollment.studentId === studentId
  );


  const myCourses = myEnrollments
    .map((enrollment) =>
      courses.find(
        (course) =>
          course.id === enrollment.courseId
      )
    )
    .filter(Boolean);

  const handleDropCourse = (courseId) => {
    dispatch(
      dropCourse({
        studentId,
        courseId,
      })
    );

    dispatch(
      IncrementSeat(courseId)
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>My Courses</h1>

      {myCourses.length === 0 ? (
        <div
          style={{
            padding: "30px",
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
          }}
        >
          <h3>No Courses Yet</h3>

          <p>
            You are not enrolled in any courses.
          </p>
        </div>
      ) : (
        myCourses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "15px",
            }}
          >
            <h2>{course.title}</h2>

            <p>
              <strong>Instructor:</strong>{" "}
              {course.instructor}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {course.category}
            </p>

            <button
              onClick={() =>
                handleDropCourse(course.id)
              }
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                padding: "15px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Drop Course
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyCourses;
