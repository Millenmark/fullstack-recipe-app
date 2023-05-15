/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Home, Login, Register } from "./pages";
import { useCookies } from "react-cookie";
import "./App.css";

function App() {
  const [cookies, setCookies] = useCookies(["access_token"])

  const isValidCookie = cookies.access_token ? true : false

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={isValidCookie ? <Home/> : <Login/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
