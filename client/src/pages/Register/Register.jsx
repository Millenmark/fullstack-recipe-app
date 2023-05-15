import { useState } from "react";
import axios from "axios"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        username,
        password
      });
      alert("Registration Completed")
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      alert(errorMessage);
    }
  }

  return (
    <>
      <h2>Register Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username (must be unique)"
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

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
