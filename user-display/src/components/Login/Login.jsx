import "./Login.css";
import React, { useState } from "react";
import { ReactComponent as Lock } from "../Assets/Icons/Lock.svg";
import { ReactComponent as User } from "../Assets/Icons/User.svg";
import { login } from "../../services/authService.js";
import { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(username, password);

    if (result.success) {
      setError("");
      navigate('/home');
      onLogin();
    } else {
      setError(result.message);
    }
  };

  return (
    <form className="container" onSubmit={handleLogin}>
      <div className="header">
        <div className="text">Welcome!</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <User className="icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <Lock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="submit-container">
        <button type="submit" className="submit">
          Login
        </button>
      </div>
      {error && <p className="error">{error} </p>}
    </form>
  );
};

export default Login;
