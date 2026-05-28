import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
export default function Navbar() {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("user"));
   const [user1, setUser1] = useState(null);
    useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setUser1(res.data);
        // console.log(res.data);

      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);
return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-mark">
          <img src="/car.png" alt="logo" className="h-8" />
        </span>
        <span className="logo-text">Goro Cars</span>
      </div>
       <div className="nav-links">
    <button className="nav-link">Home</button>
    <button className="nav-link">Bookings</button>
    <div className="nav-avatar" onClick={
      () => navigate('/Userprofile')
    }>
      <div className="profile-avatar">
            {user1?.name?.charAt(0)}
          </div>
    </div>
    <button className="nav-link logout" onClick={() =>{
      localStorage.removeItem("token");  
  localStorage.removeItem("user");   

  navigate("/"); 
    }}>Logout</button>
  </div>
    </nav>
  );
}
