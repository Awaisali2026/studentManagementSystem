import { configureStore } from "@reduxjs/toolkit"
import studentReducer from "./Features/StudentSlice";

const store = configureStore({
    reducer:{
        students: studentReducer,  

    }
})

export default store;