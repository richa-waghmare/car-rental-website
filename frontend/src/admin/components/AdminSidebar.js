import React from 'react';
import './AdminSidebar.css';
import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <div className="asb-logo">
        <span className="asb-logo-mark">CR</span>
        <div>
          <div className="asb-logo-text">CarRental</div>
          <div className="asb-logo-sub">Admin Panel</div>
        </div>
      </div>

      <nav className="asb-nav">

        <NavLink 
          to="/AdminDashboard" 
          className={({ isActive }) =>
            isActive ? "asb-nav-item active" : "asb-nav-item"
          }
        >
          <span className="asb-nav-icon">▦</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/AdminCars" 
          className={({ isActive }) =>
            isActive ? "asb-nav-item active" : "asb-nav-item"
          }
        >
          <span className="asb-nav-icon">🚗</span>
          <span>Cars</span>
        </NavLink>

        <NavLink 
          to="/AdminBookings" 
          className={({ isActive }) =>
            isActive ? "asb-nav-item active" : "asb-nav-item"
          }
        >
          <span className="asb-nav-icon">📋</span>
          <span>Bookings</span>
        </NavLink>

        <NavLink 
          to="/AdminUsers" 
          className={({ isActive }) =>
            isActive ? "asb-nav-item active" : "asb-nav-item"
          }
        >
          <span className="asb-nav-icon">👥</span>
          <span>Users</span>
        </NavLink>

      </nav>

      <div className="asb-footer">
        <div className="asb-admin-info">
          <div className="asb-avatar">A</div>
          <div>
            <div className="asb-admin-name">Admin User</div>
            <div className="asb-admin-role">Super Admin</div>
          </div>
        </div>
        <button className="asb-logout">Logout →</button>
      </div>

    </aside>
  );
}