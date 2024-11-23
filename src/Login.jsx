import React from "react";
import "./Login.css";
import COVER_IMAGE from "./assets/COVER_IMAGE.png";
import BG_IMAGE from "./assets/BG_IMAGE.png";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <img
          src={COVER_IMAGE}
          alt="ABSI Manager System"
          className="login-cover-image"
        />
      </div>

      {/* Right Section */}
      <div
        className="login-right"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      >
        <div className="login-form">
          <h3 className="form-title">Login</h3>
          <p className="form-subtitle">
            Welcome Back! Please enter your details.
          </p>
          <input type="email" placeholder="Username" className="form-input" />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me for 30 days</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button className="login-button">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
