import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {logout} from "../../store/Features/AuthSlice"

const MainNavbar = () => {
  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="main-navbar">
      <header>
        <h1>Student & Course Portal </h1>
        <nav className="nav-links">
          {userData?.role === "admin" && (
            <>
              <Link to="/admin">Admin Dashboard</Link>
              <Link to="/admin/students">Students</Link>
              <Link to="/admin/courses">Courses</Link>
              <Link to="/admin/add-student">Add Student </Link>

            </>
          )}
          {userData?.role === "student" && (
            <>
              <Link to="/student-dashboard">Student Dashboard</Link>
              <Link to="/student/available-courses">Available Courses </Link>
              <Link to="/student/my-course">My Courses</Link>
            </>
          )}
        </nav>

        {userData && (
          <div>
            <span>
              {userData.name} {userData.role}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>
    </div>
  );
};

export default MainNavbar;
