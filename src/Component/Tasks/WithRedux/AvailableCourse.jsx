import { useDispatch, useSelector } from "react-redux";
import CourseEnrollCard from "../WithRedux/CourseEnrollCard";

import { enrollStudent } from "../../store/Features/EnrollSlice";

import { decrementSeat } from "../../store/Features/CourseSlice";

function AvailableCourses() {
  const dispatch = useDispatch();

  // Logged-in student
  const loggedInStudent = useSelector((state) => state.auth?.user);

  const courses = useSelector((state) => state.courses);


  const enrollments = useSelector((state) => state.enrollment);

  const studentId = loggedInStudent?.id

  const handleEnroll = (courseId) => {
  
    const course = courses.find((course) => course.id === courseId);

    if (!course) {
      return;
    }

    if (course.seats === 0) {
      alert("No seats available.");
      return;
    }
    const alreadyEnrolled = enrollments.find(
      (enrollment) =>
        enrollment.studentId === studentId && enrollment.courseId === courseId,
    );

    if (alreadyEnrolled) {
      return;
    }


    dispatch(
      enrollStudent({
        studentId,
        courseId,
      }),
    );

  
    dispatch(decrementSeat(courseId));

  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Available Courses</h1>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        courses.map((course) => {
          const isEnrolled = enrollments.find(
            (enrollment) =>
              enrollment.studentId === studentId &&
              enrollment.courseId === course.id,
          );

          return (
            <CourseEnrollCard
              key={course.id}
              course={course}
              isEnrolled={Boolean(isEnrolled)}
              onEnroll={handleEnroll}
            />
          );
        })
      )}
    </div>
  );
}

export default AvailableCourses;
