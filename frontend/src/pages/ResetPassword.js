import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {

  const { token } = useParams(); // 🔥 URL se token
  console.log("Reset token:", token); // 🔍 debug token
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 check passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert(res.data.message);

      // 🔥 redirect to login
      navigate("/");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="reset-container">

      <div className="reset-card">

        <h2>Reset Password</h2>
        <p className="subtitle">
          Enter your new password below
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn-submit">Reset Password</button>

        </form>

        <div className="extra-links">
          <a href="/">Back to Login</a>
        </div>

      </div>

    </div>
  );
}

export default ResetPassword;