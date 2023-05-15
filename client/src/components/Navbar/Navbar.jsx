import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import {useCookies} from "react-cookie"


const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate()

  const handleLogout = () => {
    setCookies("access_token", "")
    localStorage.removeItem("userID")
    navigate("/login")
  }

  return (
    <nav className={style.nav}>
      {cookies.access_token ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
