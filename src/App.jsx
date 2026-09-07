import StudentForm from "./Component/StudentManagement/StudentForm";
import { Routes, Route } from "react-router-dom";
import LoginUsingRedux from "./Component/Tasks/WithRedux/LoginUsingRedux";
import Admin from "./Component/Tasks/WithRedux/Admin";
import Student from "./Component/Tasks/WithRedux/Student";
import CoursesUsingRedux from "./Component/Tasks/WithRedux/CoursesUsingRedux";
import ProtectedRoutes from "./Component/utills/ProtectedRoutes";
import StudentDashboad from "./Component/Tasks/WithRedux/StudentDashboad";
import AvailableCourse from "./Component/Tasks/WithRedux/AvailableCourse";
import MyCourses from "./Component/Tasks/WithRedux/MyCourses";
import Layout from "./Component/Tasks/WithRedux/Layout/Layout";
import MainNavbar from "./Component/Tasks/WithRedux/MainNavbar";
const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<StudentForm />} />
      <Route path="/login" element={<LoginUsingRedux />} />
      <Route path="/" element={<LoginUsingRedux />} />
      <Route path="/navbar" element={<MainNavbar />} />

      <Route element={<ProtectedRoutes />}>
        <Route element={<Layout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/students" element={<Student />} />
          <Route path="/admin/add-student" element={<StudentForm />} />
          <Route path="/admin/courses" element={<CoursesUsingRedux />} />

          <Route path="/student-dashboard" element={<StudentDashboad />} />

          <Route
            path="/student/available-courses"
            element={<AvailableCourse />}
          />

          <Route path="/student/my-course" element={<MyCourses />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
