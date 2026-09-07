import { useState } from "react";
const LoginScreen = () => {
  const users = [
    {
      id: 1,
      name: "Admin",
      email: "admin@test.com",
      password: "admin123",
      role: "admin",
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@test.com",
      password: "student123",
      role: "student",
    },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (data) => data.email === email && data.password === password
    );

    if (user) {
      setMessage(`Welcome, ${user.name}!`);
      setError("");
    } else {
      setError("Invalid Credentials");
      setMessage("");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              className="form-input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-button" type="submit">
            Login
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginScreen;
