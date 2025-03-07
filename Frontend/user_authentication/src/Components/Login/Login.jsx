import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import login from "../../Services/Login.service";
import {jwtDecode} from 'jwt-decode'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const navigate=useNavigate()

  const handleLogin = async(e) => {
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
      const response = await login(data);
      if(response){
       toast.success(response.data.message)
       navigate('/')
        // const token = response.data.token;
        // const user = jwtDecode(token);
        // console.log(user)
      }

      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="wrapper">
      <div className="form-header">
          <div className="titles">
            <div className="title-login">Login</div>
          </div>

        </div>
    <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
      <div className="input-box">
        <input type="text" className="input-field" id="log-email" required 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        <label htmlFor="log-email" className="label text-warning">
          Email
        </label>
        <i className="bx bx-envelope icon"></i>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" id="log-pass" required 
        value={password}
   onChange={(e)=>setPassword(e.target.value)}
        />
        <label htmlFor="log-pass" className="label text-warning">
          Password
        </label>
        <i className="bx bx-lock-alt icon"></i>
      </div>
      <div className="form-cols">
        <div className="col-1"></div>
       
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

    </div>
  );
}

export default Login;
