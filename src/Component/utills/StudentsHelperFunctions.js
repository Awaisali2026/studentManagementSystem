export const getTotalStudents = (students) => students.length;

export const getTotalMarks = (students) =>
  students.reduce((total, student) => total + student.marks, 0);

export const getAverageMarks = (students) => {
  if (students.length === 0) return 0;

  return getTotalMarks(students) / students.length;
};

export const getHighestStudent = (students) => {
  if (students.length === 0) return null;

  return students.reduce((highest, student) =>
    student.marks > highest.marks ? student : highest
  );
};
