import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { Container } from "../../UI";
import style from "./DefaultLayout.module.css"

const DefaultLayout = () => {
  return (
    <>
      <header className={style.header}>
        <Container>
          <Link to="/">Logo</Link>
          <Navbar />
        </Container>
      </header>
      <main className={style.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default DefaultLayout;
