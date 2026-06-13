import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();

  const [user1, setUser1] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

          setUser1(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => navigate("/landing")}>
        <div className="logo-box">
          <img src="/car.png" alt="logo" className="logo-img" />
        </div>

        <span className="logo-text">Goro Cars</span>
      </div>

      <div className="nav-links">
        <button
          className="nav-link"
          onClick={() => navigate("/landing")}
        >
          Home
        </button>

        <button
          className="nav-link"
          onClick={() => navigate("/Booking")}
        >
          Bookings
        </button>

        <div
          className="nav-avatar"
          onClick={() => navigate("/Userprofile")}
        >
          <div className="profile-avatar">
            {user1?.name?.charAt(0)?.toUpperCase()}
          </div>
        </div>

        <button
          className="logout-btn "
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
  }