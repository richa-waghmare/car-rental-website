import React from 'react';
import './AdminLogin.css';

export default function AdminLogin() {
  return (
    <div className="al-root">

      {/* Left */}
      <div className="al-left">
        <div className="al-left-content">
          <div className="al-brand">
            <span className="al-logo-mark">CR</span>
            <div>
              <div className="al-brand-name">CarRental</div>
              <div className="al-brand-sub">Admin Portal</div>
            </div>
          </div>
          <h1 className="al-headline">Manage your fleet <span>with ease</span></h1>
          <p className="al-desc">Full control over bookings, cars, pricing, and customers — all in one place.</p>
          <div className="al-stats">
            <div className="al-stat">
              <div className="al-stat-val">1,240</div>
              <div className="al-stat-label">Total Bookings</div>
            </div>
            <div className="al-stat">
              <div className="al-stat-val">84</div>
              <div className="al-stat-label">Active Cars</div>
            </div>
            <div className="al-stat">
              <div className="al-stat-val">₹9.2L</div>
              <div className="al-stat-label">Monthly Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="al-right">
        <div className="al-card">
          <div className="al-card-header">
            <div className="al-shield">🛡</div>
            <h2>Admin Login</h2>
            <p>Restricted access — authorized personnel only</p>
          </div>

          <div className="al-form">
            <div className="al-form-group">
              <label>Admin Email</label>
              <input type="email" placeholder="admin@carrental.com" />
            </div>
            <div className="al-form-group">
              <label>Password</label>
              <div className="al-pass-wrap">
                <input type="password" placeholder="Enter admin password" />
                <button className="al-eye">👁</button>
              </div>
            </div>
            <div className="al-form-row">
              <label className="al-remember">
                <input type="checkbox" /> Remember me
              </label>
              <span className="al-forgot">Forgot password?</span>
            </div>
            <button className="al-btn-login">Login to Admin Panel →</button>
          </div>

          <div className="al-back">
            <button>← Back to Customer Site</button>
          </div>
        </div>
      </div>

    </div>
  );
}
