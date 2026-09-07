import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {logout} from "../store/Features/AuthSlice";
 
const Navbar = () => {
    const userData = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login");
    }
  return (
    <div className="navbar">
      <div className="navTitle">
        <h1>Student Management System</h1>
      </div>
       <h2 style={{color: "white"}}>{userData.name} - {userData.role}</h2>
      
   
      <div className="navAction">
        
        <button className="remove-btn btn" onClick={() => handleLogout()}>Logout</button>
        <Link to="/register">Add Student</Link>
      </div>

    </div>
  )
}

export default Navbar

