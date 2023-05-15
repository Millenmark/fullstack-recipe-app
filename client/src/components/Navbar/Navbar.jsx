import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
