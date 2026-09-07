import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

const enrollmentsSlice = createSlice({
  name: "enrollments",

  initialState,

  reducers: {
    enrollStudent: (state, action) => {
      const { studentId, courseId } = action.payload;

      const alreadyEnrolled = state.find(
        (enrollment) =>
          enrollment.studentId === studentId &&
          enrollment.courseId === courseId
      );

      if (!alreadyEnrolled) {
        state.push({
          studentId,
          courseId,
        });
      }
    },

    dropCourse: (state, action) => {
      const { studentId, courseId } = action.payload;

      return state.filter(
        (enrollment) =>
          !(
            enrollment.studentId === studentId &&
            enrollment.courseId === courseId
          )
      );
    },
  },
});

export const {
  enrollStudent,
  dropCourse,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;