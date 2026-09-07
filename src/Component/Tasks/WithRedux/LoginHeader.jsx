import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import {logout} from "../../store/Features/AuthSlice";

const LoginHeader = () => {
    const userData = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login");
    }

  return (
    <div>
        <div className="Header-Container">
            <h2>Student & Course Portal </h2>
            {userData && (
                <div className="User-Data">
                    <span>{userData.name}  {userData.role}</span>
                    <button onClick={handleLogout}></button>
                </div>
            )}
        </div>
    </div>
  )
}

export default LoginHeader