import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Features/StudentSlice";
import authReducer from "./Features/AuthSlice";
import courseReducer from "./Features/CourseSlice";
import enrollReducer from "./Features/EnrollSlice";

const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer,
    courses: courseReducer,
    enrollment: enrollReducer,
  },
});

export default store;
