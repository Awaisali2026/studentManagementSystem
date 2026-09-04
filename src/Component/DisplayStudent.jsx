import { useState } from "react";

const DisplayStudent = ({ students, onDeleteStudent, onMarkIncrementBy5 }) => {
  const [passedStudent, setPassedStudent] = useState(false);

  const filterStudent = passedStudent
    ? students.filter((student) => student.marks >= 50)
    : students;

  const totalMarks = filterStudent.reduce(
    (total, student) => total + Number(student.marks),
    0,
  );

  const totalStudent = filterStudent.length;

  const averageMarks = totalMarks / totalStudent;

  const highestStudent = filterStudent.reduce((highest, student) =>
    highest > student.marks ? student : highest,
  );


  return (
    <div>
      <div>
        <h1>Student Record </h1>

        <h2>Total Student: {filterStudent.length} </h2>

        <h3>Total Marks by All Student : {totalMarks}</h3>

        <p style={{ fontSize: "1.2rem", color: "green" }}>
          Average Marks : {averageMarks.toFixed(2)}
        </p>

        {filterStudent.length <= 0 ? (
          <div>
            <h3>No Student Record Found </h3>
          </div>
        ) : (
          filterStudent.map((student) => (
            <div key={student.id}>
              <ul>
                <li>{student.name}</li>
                <p>{student.marks}</p>
                <h5
                  style={{
                    color: student.marks >= 50 ? "green" : "red",
                    fontSize: "1.2rem",
                  }}
                >
                  {student.marks >= 50 ? "Pass" : "Fail"}
                </h5>
              </ul>

              <button onClick={() => onDeleteStudent(student.id)}>
                Delete
              </button>

               <button style={{marginLeft: "10px"}} 
               onClick={() => onMarkIncrementBy5(student.id)}>
                Increase 5+ 
              </button>
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: "12px" }}>
        <button onClick={() => setPassedStudent(false)}>Show All</button>
        <button onClick={() => setPassedStudent(true)}>
          Show Passed Only!
        </button>
      </div>

      <div>
        <h2>Top Student</h2>
        <h3
          style={{ color: "green" }}
        >{`${highestStudent.name} with Marks ${highestStudent.marks} has the Hightest Marks!`}</h3>
      </div>
    </div>
  );
};

export default DisplayStudent;
