import React, { useState } from "react";
import "./AuthCard.css";
import { FiEyeOff, FiArrowLeft, FiCalendar } from "react-icons/fi";

function AuthCard() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="page">
      <div className="auth-card">

        {/* Header */}
        <div className="header">
          {activeTab === "register" && (
            <button className="back-btn" onClick={() => setActiveTab("login")}>
              <FiArrowLeft />
            </button>
          )}

          <h1>
            {activeTab === "login"
              ? "Sign in to your Account"
              : "Register"}
          </h1>

          <p>
            {activeTab === "login" ? (
              <>
                Don't have an account?
                <span onClick={() => setActiveTab("register")}>
                  {" "}Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?
                <span onClick={() => setActiveTab("login")}>
                  {" "}Log In
                </span>
              </>
            )}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <div className="form">

            <label>Email</label>
            <input
              type="email"
              placeholder="Loisbecket@gmail.com"
            />

            <label>Password</label>
            <div className="input-icon">
              <input
                type="password"
                placeholder="********"
              />
              <FiEyeOff />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/">Forgot Password?</a>
            </div>

            <button className="primary-btn">
              Log In
            </button>
          </div>
        )}

        {/* Register Form */}
        {activeTab === "register" && (
          <div className="form">

            <div className="row">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="Lois" />
              </div>

              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Becket" />
              </div>
            </div>

            <label>Email</label>
            <input
              type="email"
              placeholder="Loisbecket@gmail.com"
            />

            <label>Date of Birth</label>
            <div className="input-icon">
              <input
                type="text"
                placeholder="18/03/2024"
              />
              <FiCalendar />
            </div>

            <label>Phone Number</label>
            <input
              type="text"
              placeholder="(454) 726-0592"
            />

            <label>Password</label>
            <div className="input-icon">
              <input
                type="password"
                placeholder="********"
              />
              <FiEyeOff />
            </div>

            <button className="primary-btn">
              Register
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default AuthCard;