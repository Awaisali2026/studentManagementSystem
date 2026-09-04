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
    <div>
      <h1>Login</h1>

      <div className="login-Form">
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LoginScreen;
