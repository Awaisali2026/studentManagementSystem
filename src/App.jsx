import StudentsManagement from "./Component/StudentManagement/StudentsManagement";
import StudentForm from "./Component/StudentManagement/StudentForm";

import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Component/Tasks/LoginScreen";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentsManagement />} />
      <Route path="/register" element={<StudentForm />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
};

export default App;
