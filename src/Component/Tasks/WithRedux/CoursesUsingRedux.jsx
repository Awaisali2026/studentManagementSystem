import { useSelector } from "react-redux";
import CourseCard from "../CourseCard";
import AddCourse from "./AddCourse";
import { useState } from "react";

const CoursesUsingRedux = () => {
  const [model, setModel] = useState(false)

    const courseData = useSelector((state) => state.courses)


  return <div>
    <div className="Model-Button"><button onClick={() => setModel((prev) => !prev)}> {model ? "Close" : "Add Course"} </button> </div>

    {model && (
      <div className="model-overlay">
        <div className="model-content">
          <button className="close-button" onClick={() => setModel(false)}>X</button>
          <AddCourse />
        </div>
      </div>
    )}
      <div className="Container">
        {courseData.length === 0 ? (
          <div className="empty-State">
            <h2>No Course Data Found!</h2>
          </div>
        ) : (
          courseData.map((data) => <CourseCard key={data.id} course={data} />)
        )}
      </div>

   

    </div>
};

export default CoursesUsingRedux;
