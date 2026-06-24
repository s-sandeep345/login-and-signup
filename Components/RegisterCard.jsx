import React from "react";
import "./RegisterCard.css";

import {
  FiArrowLeft,
  FiEyeOff,
  FiCalendar
} from "react-icons/fi";

function RegisterCard({ goToLogin }) {
  return (
    <div className="page">

      <div className="register-card">

        {/* Header */}
        <div className="register-header">

          <button className="back-btn">
            <FiArrowLeft />
          </button>

          <h1>Register</h1>

          <p>
  Already have an account?
  <span
    className="link-btn"
    onClick={goToLogin}
  >
    <u>Log In</u>
  </span>
</p>

        </div>

        {/* Form */}
        <div className="register-body">

          {/* Names */}

          <div className="name-row">

            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                defaultValue="Lois"
              />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                defaultValue="Becket"
              />
            </div>

          </div>

          {/* Email */}

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              defaultValue="Loisbecket@gmail.com"
            />
          </div>

          {/* DOB */}

          <div className="input-group">
            <label>Birth of date</label>

            <div className="icon-input">

              <input
                type="text"
                defaultValue="18/03/2024"
              />

              <FiCalendar className="input-icon" />

            </div>
          </div>

          {/* Phone */}

          <div className="input-group">
            <label>Phone Number</label>

            <div className="phone-field">

              <div className="country-code">
                +1
                <span>▼</span>
              </div>

              <input
                type="text"
                defaultValue="(454) 726-0592"
              />

            </div>
          </div>

          {/* Password */}

          <div className="input-group">
            <label>Set Password</label>

            <div className="icon-input">

              <input
                type="password"
                defaultValue="12345678"
              />

              <FiEyeOff className="input-icon" />

            </div>

          </div>

          {/* Button */}

          <button className="register-btn">
            Register
          </button>

        </div>

      </div>

    </div>
  );
}

export default RegisterCard;