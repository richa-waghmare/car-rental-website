import React, { useState, useEffect } from "react";
import './Userprofile.css';
import axios from 'axios';

function Userprofile() {

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

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

        setUser(res.data);
        console.log(res.data);

      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  // 🔥 Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // 🔥 Save profile
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/users/profile",
        user,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEditMode(false);
      alert("Profile updated ✔️");

    } catch (err) {
      console.error(err);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            {user.name?.charAt(0)}
          </div>

          <input 
            name="name"
            value={user.name} 
            onChange={handleChange}
            className="editable-input name" 
            readOnly={!editMode}
          />

          <input 
            name="email"
            value={user.email} 
            onChange={handleChange}
            className="editable-input email" 
            readOnly={!editMode}
          />
        </div>

        <div className="profile-info">

          <div className="info-row">
            <span>Phone</span>
            <input 
              name="phone"
              value={user.phone} 
              onChange={handleChange}
              className="editable-input" 
              readOnly={!editMode}
            />
          </div>

          <div className="info-row">
            <span>Address</span>
            <input 
              name="address"
              value={user.address} 
              onChange={handleChange}
              className="editable-input" 
              readOnly={!editMode}
            />
          </div>

          <div className="info-row">
            <span>Member Since</span>
            <span>{new Date(user.createdAt).getFullYear()}</span>
          </div>

        </div>

        {/* 🔥 Toggle button */}
        {!editMode ? (
          <button className="btn save" onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
        ) : (
          <button className="btn save" onClick={handleSave}>
            Save Changes
          </button>
        )}

      </div>

    </div>
  );
}

export default Userprofile;