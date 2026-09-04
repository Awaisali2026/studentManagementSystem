import { useState } from "react";
import DisplayStudent from "./DisplayStudent";
import AddStudent from "./AddStudent";

const Students = () => {
  const initialStudents = [
    { id: 1, name: "Ali", marks: 85 },
    { id: 2, name: "Sara", marks: 45 },
    { id: 3, name: "Ahmed", marks: 72 },
  ];

  const [students, setStudents] = useState(initialStudents);

  const onAddStudent = (nameText, marks) => {
    const newStudent = {
      id: Date.now(),
      name: nameText,
      marks: marks,
    };

    setStudents((prevStudent) => [...prevStudent, newStudent]);
  };

  const onDeleteStudent = (id) => {
    setStudents((prevStudent) =>
      prevStudent.filter((student) => student.id !== id),
    );
  };

  const onMarkIncrementBy5 = (id) => {
    setStudents((prevStudent) =>
      prevStudent.map((student) =>
        student.id === id
          ? { ...student, marks: Math.min(Number(student.marks) + 5, 100) }
          : student,
      ),
    );
  };

  return (
    <div>
      <DisplayStudent
        students={students}
        onDeleteStudent={onDeleteStudent}
        onMarkIncrementBy5={onMarkIncrementBy5}
      />
      <AddStudent onAddStudent={onAddStudent} />
    </div>
  );
};

export default Students;
