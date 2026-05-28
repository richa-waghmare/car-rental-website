import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      alert(res.data.message); // "Reset link sent"

      // optional redirect
      navigate("/");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="forgot-container">

      <div className="forgot-card">

        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your email and we’ll send you a reset link
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="btn-submit">
            Send Reset Link
          </button>

        </form>

        <div className="extra-links">
          <a href="/">Back to Login</a>
        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;