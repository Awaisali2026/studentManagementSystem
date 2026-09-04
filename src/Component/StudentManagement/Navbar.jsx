import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navTitle">
        <h1>Student Management System</h1>
      </div>
      <div className="navAction">
        <Link to="/register">Add Student</Link>
      </div>

    </div>
  )
}

export default Navbar