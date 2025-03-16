import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import login from "../../Services/Login.service";
import { MoonLoader } from "react-spinners"; // Correct 
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
    const[showPass,setShowPass]=useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!email || !password) {
        toast.error("Please fill all the fields");
        return;
      }
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        toast.error("Invalid email address");
        return;
      }

      const response = await login({ email, password });

      if (response) {
        toast.success(response.data.message);
        navigate("/")
        if (location.pathname === "/login") {
          window.location.replace("/");
        } else {
          window.location.reload();
        }

      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-header">
        <div className="titles">
          <div className="title-login">Login</div>
        </div>
      </div>
      <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            id="log-email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="log-email" className="label text-warning">
            Email
          </label>
          <i className="bx bx-envelope icon"></i>
        </div>
      
              <div className="input-box">
                  <input
                    type={`${showPass?"text":"password"}`}
                    className="input-field"
                    id="log-pass"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="log-pass" className="label text-warning">
                    Password
                  </label>
                  <i className="bx bx-lock-alt icon"></i>
                  <div className="eye_icon" onClick={()=>setShowPass(prev=>!prev)}>
                    {showPass ? <FaEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
        <div className="input-box">
          <button
            className="btn-submit"
            id="SignInBtn"
            disabled={loading}
            style={{
              backgroundColor: loading ? "#FFD700" : "", // Yellow when disabled
              color: loading ? "black" : "black", // Black text when disabled
              fontWeight: loading ? "bold" : "normal", // Bold text when disabled
            }}
          >
            {loading ? (
              <MoonLoader color="red" size={12} /> // White spinner, bigger size
            ) : (
              <strong className="text-white">

                Login
              </strong>
            )}
            <i className="bx bx-log-in"></i>
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
