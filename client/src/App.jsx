import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { Home, Login, Register } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
