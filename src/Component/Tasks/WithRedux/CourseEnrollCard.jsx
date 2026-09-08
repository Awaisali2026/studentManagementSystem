function CourseEnrollCard({
  course,
  isEnrolled,
  onEnroll,
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "15px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
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

      <p>
        <strong>Available Seats:</strong>{" "}
        {course.seats}
      </p>

      {isEnrolled ? (
        <button
          disabled
          style={{
            backgroundColor: "#777",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Already Enrolled
        </button>
      ) : course.seats === 0 ? (
        <button
          disabled
          style={{
            backgroundColor: "#aaa",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          No Seats Available
        </button>
      ) : (
        <button
          onClick={() => onEnroll(course.id)}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "15px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enroll
        </button>
      )}
    </div>
  );
}

export default CourseEnrollCard;
