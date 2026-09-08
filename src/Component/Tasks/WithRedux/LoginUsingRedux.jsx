import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../../store/Features/AuthSlice"
import { users } from "../../data/mockUsers";


const LoginUsingRedux = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if(!email || !password) return setError("Both Field are Required!");
    
    const matchUser =users.find((user) => user.email === email && user.password === password);

    if(!matchUser) return setError("Invalid credentials");

    dispatch(login(matchUser));
    setError("")
    navigate(matchUser.role === "admin" ? "/admin" : "/student-dashboard");

  }

  return (
    <div className="login-Container">
      <div className="login-form">
        <h2>Login </h2>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={(e) => handleSubmit(e.preventDefault())}>Log In</button>
          {error && <p style={{color: "red"}}> {error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginUsingRedux;
