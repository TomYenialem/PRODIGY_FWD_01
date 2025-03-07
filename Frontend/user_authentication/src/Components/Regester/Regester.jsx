import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../../Services/Regester.service";
import toast from "react-hot-toast";

function Regester() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    try {
      if (!username || !email || !password || !confirmPassword) {
        toast.error("Please fill all the fields");
        return;
      }
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        toast.error("Invalid email address");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return;
      }
      const data = { username, email, password };
      if (password!== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
  
      register(data).then((res) =>toast.success(res.data.message)
      );
    } catch (error) {
      toast.error(error.data.message);
      console.log(error)
    }
  };

  return (
     <div className="wrapper">
      <div className="form-header">
          <div className="titles">
            <div className="title-login"> Register</div>
          </div>

        </div>
    <form
      className="login-form"
      autoComplete="off"
      onSubmit={handleRegistration}
    >
      <div className="input-box">
        <input
          type="text"
          className="input-field"
          id="name"
          required
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="log-email" className="label text-warning">
          username
        </label>
        <i className="bx bx-envelope icon"></i>
      </div>
      <div className="input-box">
        <input
          type="email"
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
          type="password"
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
      </div>

      <div className="input-box">
        <input
          type="password"
          className="input-field"
          id="confirm-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label htmlFor="log-pass" className="label text-warning">
          Confirm Password
        </label>
        <i className="bx bx-lock-alt icon"></i>
      </div>
      <div className="input-box">
        <button className="btn-submit" id="SignInBtn">
          Sign In <i className="bx bx-log-in"></i>
        </button>
      </div>
      <div className="switch-form ">
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </form>
        </div>
  );
}

export default Regester;
