import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
    try{
      const payload = {
      name: formData.fname + " " + formData.lname,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      address: formData.address
    };
      const res = await axios.post('http://localhost:5000/api/auth/register', payload);
      console.log(res.data);

      localStorage.setItem('token', res.data.token);
      navigate('/');
    }
  catch(err){
  console.log(err.response?.data); 
  alert(err.response?.data?.message);
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
             <button 
              className="tab"
              onClick={() => navigate('/')}
            >
              Log In
            </button>
            <button className="tab active">Sign Up</button>
          </div>

          {/* ✅ FORM FIXED HERE */}
          <form className="login-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              
                <input
                type="text"
                name="fname"
                placeholder="First Name"
                value={formData.fname}
                onChange={handleChange}
                required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                value={formData.lname}
                onChange={handleChange}
                required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>

              <div className="form-group">
              <input
                type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>

              <div className="form-group">
              <input
                 type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>
             
               <div className="form-group">
              <input
                  type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>

                 <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                // className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#006060] outline-none"
              />
            </div>
            <button className="btn-primary" type="submit">Sign Up</button>

            {/* <div className="divider"><span>or</span></div>

            <button type="button" className="btn-social">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" width={20} />
              Continue with Google
            </button>

            <button type="button" className="btn-social">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="F" width={20} />
              Continue with Facebook
            </button> */}

          </form>

        </div>
      </div>

    </div>
  );
};

