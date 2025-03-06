import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import login from "../../Services/Login.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if(!email || !password){
        toast.error("Please fill all the fields");
        return;
      }
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        toast.error("Invalid email address");
        return;
      }
      const data={
        email,password
      }
      login(data).then((res) => toast.success(res.data.message));
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
      <div className="input-box">
        <input type="text" className="input-field" id="log-email" required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        <label htmlFor="log-email" className="label">
          Email
        </label>
        <i className="bx bx-envelope icon"></i>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" id="log-pass" required 
        value={password}
   onChange={(e)=>setPassword(e.target.value)}
        />
        <label htmlFor="log-pass" className="label">
          Password
        </label>
        <i className="bx bx-lock-alt icon"></i>
      </div>
      <div className="form-cols">
        <div className="col-1"></div>
        <div className="col-2">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div className="input-box">
        <button className="btn-submit" id="SignInBtn">
          Login  <i className="bx bx-log-in"></i>
        </button>
      </div>
      <div className="switch-form">
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </div>
    </form>
  );
}

export default Login;
