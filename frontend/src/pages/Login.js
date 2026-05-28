import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
   
     try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password
      }
    );
    console.log(res.data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    if(res.data.user.role === 'admin'){
      navigate('/AdminDashboard');
    }
    else{
      navigate("/Landing");
    }
  } catch (err) {
    console.error(err.response?.data);
    // alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="login-root">

      {/* Left Hero */}
      <div className="login-left">
        <div className="login-left-inner">
          <h1 className="login-hero-title">Drive Your <span>Freedom</span></h1>
          <p className="login-hero-sub">
            Rent cars on your terms. Transparent pricing, zero deposit, pickup near you.
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="login-right">
        <div className="login-card">

          <div className="login-logo">
            <span className="logo-mark">
              <img src="/car.png" alt="logo" className="h-8" />
            </span>
            <span className="logo-text">Goro Cars</span>
          </div>

          {/* Tabs */}
          <div className="login-tabs">
            <button className="tab active" >Log In</button>
         <button 
              className="tab"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
          </div>

          {/* ✅ FORM FIXED HERE */}
          <form className="login-form" onSubmit={submitHandler}>
            
            <div className="form-group">
              <label>Email / Phone</label>
              <input
                type="text"
                placeholder="Enter email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="forgot"onClick={() =>{
                navigate('/ForgotPassword')
              }}>Forgot Password?</span>
            </div>

            <button className="btn-primary" type="submit">Log In</button>

            <div className="divider"><span>or</span></div>

            <button type="button" className="btn-social">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" width={20} />
              Continue with Google
            </button>

            <button type="button" className="btn-social">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="F" width={20} />
              Continue with Facebook
            </button>

          </form>

        </div>
      </div>

    </div>
  );
};

export default Login;