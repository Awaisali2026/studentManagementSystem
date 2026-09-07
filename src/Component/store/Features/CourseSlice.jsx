import { createSlice } from "@reduxjs/toolkit";
const courses = [ 
  { id: 1, title: "React Basics", instructor: "John", category: "Frontend", seats: 5 }, 
  { id: 2, title: "JavaScript", instructor: "Sara", category: "Programming", seats: 0 }, 
  { id: 3, title: "CSS Basics", instructor: "Ali", category: "Frontend", seats: 8 } 
]; 
const courseSlice = createSlice({
    name: "courses",
    initialState: courses,
    reducers: {
        addCourse : (state, action) => {
         return  [...state, action.payload]
        },
        removeCourse: (state, action) => {
           return state.filter((data) => data.id !==action.payload);
            
        },
        decrementSeat: (state, action) => {
           const course = state.find((data) => data.id === action.payload);
           if(course && course.seats > 0 ) course.seats -= 1;
        },
         IncrementSeat: (state, action) => {
           const course = state.find((data) => data.id === action.payload);
           if(course && course.seats > 0 ) course.seats += 1;
        }
    }

})

export const {addCourse, removeCourse, decrementSeat, IncrementSeat} = courseSlice.actions;
export default courseSlice.reducer;