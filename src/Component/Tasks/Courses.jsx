import CourseCard from "./CourseCard";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      instructor: "John",
      category: "Frontend",
      seats: 5,
    },
    {
      id: 2,
      title: "JavaScript",
      instructor: "Sara",
      category: "Programming",
      seats: 0,
    },
    {
      id: 3,
      title: "CSS Basics",
      instructor: "Ali",
      category: "Frontend",
      seats: 8,
    },
  ];

  return (
    <div>
      <div className="Container">
        {courses.length === 0 ? (
          <div className="empty-State">
            <h2>No Course Data Found!</h2>
          </div>
        ) : (
          courses.map((data) => <CourseCard key={data.id} course={data} />)
        )}
      </div>
    </div>
  );
};

export default Courses;
