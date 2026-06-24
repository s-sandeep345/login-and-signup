import React from "react";
import "./LoginCard.css";
import {
  FaGoogle,
  FaFacebook
} from "react-icons/fa";
import {
  FiEyeOff
} from "react-icons/fi";

function LoginCard({ goToRegister }) {
  return (
    <div className="page">

      <div className="login-card">

        {/* Header */}
        <div className="header">

          <div className="logo-row">
            <div className="logo-box">
              <span>🛡</span>
            </div>

            <span className="logo-text">
              Logoipsum
            </span>
          </div>

          <h1>
            Sign in to your
          <br />
         Account
          </h1>

          <p>
  Don't have an account?
  <span
    className="link-btn"
    onClick={goToRegister}
  >
   <u>Sign Up</u>
  </span>
</p>
        </div>

        {/* Form Section */}
        <div className="form-section">

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              value="Loisbecketk@gmail.com"
              readOnly
            />
          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="password-wrapper">

              <input
                type="password"
                value="12345678"
                readOnly
              />

              <FiEyeOff className="eye" />

            </div>
          </div>

          <div className="options">

            <div className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <a href="/">
              Forgot Password ?
            </a>

          </div>

          <button className="login-btn">
            Log In
          </button>

          <div className="divider">
            <span></span>
            <p>Or login with</p>
            <span></span>
          </div>

          <div className="social-login">

            <button>
              <FaGoogle />
              Google
            </button>

            <button>
              <FaFacebook />
              Facebook
            </button>

          </div>

          <div className="terms">
            By signing up, you agree to the
            <strong> Terms of Service </strong>
            and
            <strong> Data Processing Agreement</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginCard;