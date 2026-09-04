import { createSlice } from "@reduxjs/toolkit";

const students = [
  { id: 1, name: "Ali", marks: 85 },
  { id: 2, name: "Sara", marks: 45 },
  { id: 3, name: "Ahmed", marks: 72 },
];

const studentSlice = createSlice({
  name: "students",
  initialState: students,
  reducers: {
    addStudent: (state, action) => {
      return [...state, action.payload];
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
  },
});

export const { addStudent, deleteStudent, increaseMarks } =
  studentSlice.actions;
export default studentSlice.reducer;
