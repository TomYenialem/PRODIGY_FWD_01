import React from 'react'
import { Link } from 'react-router-dom'

function Regester() {
  return (
    <form action="#" className="login-form" autoComplete="off">
      <div className="input-box">
        <input type="text" className="input-field" id="name" required />
        <label htmlFor="log-email" className="label">
         username
        </label>
        <i className="bx bx-envelope icon"></i>
      </div>
      <div className="input-box">
        <input type="email" className="input-field" id="log-email" required />
        <label htmlFor="log-email" className="label">
          Email
        </label>
        <i className="bx bx-envelope icon"></i>
      </div>
      <div className="input-box">
        <input type="password" className="input-field" id="log-pass" required />
        <label htmlFor="log-pass" className="label">
          Password
        </label>
        <i className="bx bx-lock-alt icon"></i>
      </div>
      <div className="input-box">
        <button className="btn-submit" id="SignInBtn">
          Sign In <i className="bx bx-log-in"></i>
        </button>
      </div>
      <div className="switch-form">
        <span>
          Don't have an account? <Link to="/login">Register</Link>
        </span>
      </div>
    </form>
  );
}

export default Regester



 