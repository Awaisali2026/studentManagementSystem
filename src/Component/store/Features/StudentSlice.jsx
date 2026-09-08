import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/mockUsers";

const students = users
  .filter((user) => user.role === "student")
  .map(({ id, name, email, marks, active }) => ({
    id,
    name,
    email,
    marks,
    active,
  }));

const studentSlice = createSlice({
  name: "students",
  initialState: students,
  reducers: {
    addStudent: (state, action) => {
      return [...state, { active: true, ...action.payload }];
    },
    deleteStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
    increaseMarks: (state, action) => {
      return state.map((student) =>
        student.id === action.payload
          ? { ...student, marks: student.marks + 5 }
          : student,
      );
    },
    ToggleActiveStudent: (state, action) => {
      const student = state.find((student) => student.id === action.payload);
      if (student) student.active = !student.active;
    },
    updateStudentName: (state, action) => {
      const { id, name } = action.payload;
      const student = state.find((student) => student.id === id);
      if (student) student.name = name;
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  increaseMarks,
  ToggleActiveStudent,
  updateStudentName,
} = studentSlice.actions;
export default studentSlice.reducer;
