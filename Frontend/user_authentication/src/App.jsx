import "./App.css";
import Login from "./Components/Login/Login";
import Regester from "./Components/Regester/Regester";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
   const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="form-header">
          <div className="titles">
            <div className="title-login">{isLogin ? "login" : "Register"}</div>
          </div>
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regester />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
