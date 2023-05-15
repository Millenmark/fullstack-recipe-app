/* eslint-disable no-unused-vars */
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useCookies } from "react-cookie";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          username,
          password,
        }
      );
      setCookies("access_token", response.data.token);
      localStorage.setItem("userID", response.data.userID)
      navigate("/")
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      alert(errorMessage);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="inputField">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
