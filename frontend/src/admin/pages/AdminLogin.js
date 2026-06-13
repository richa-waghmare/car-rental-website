import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      // Check if user is admin
      if (res.data.user.role !== 'admin') {
        setError('❌ Only admins can access this portal.');
        setLoading(false);
        return;
      }

      // Store token and user
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      if (rememberMe) {
        localStorage.setItem('adminEmail', email);
      }

      // Navigate to admin dashboard
      navigate('/AdminDashboard');
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed. Please try again.';
      setError(`❌ ${message}`);
      setLoading(false);
    }
  };

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

          {error && <div className="al-error-msg">{error}</div>}

          <form className="al-form" onSubmit={handleLogin}>
            <div className="al-form-group">
              <label>Admin Email</label>
              <input
                type="email"
                placeholder="admin@carrental.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="al-form-group">
              <label>Password</label>
              <div className="al-pass-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="al-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁'}
                </button>
              </div>
            </div>
            <div className="al-form-row">
              <label className="al-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <span className="al-forgot">Forgot password?</span>
            </div>
            <button type="submit" className="al-btn-login" disabled={loading}>
              {loading ? '⏳ Logging in...' : 'Login to Admin Panel →'}
            </button>
          </form>

          <div className="al-back">
            <button
              type="button"
              onClick={() => navigate('/landing')}
              className="al-back-btn"
            >
              ← Back to Customer Site
            </button>
          </div>

          <div className="al-demo-creds">
            <p className="al-demo-label">📌 Demo Credentials:</p>
            <code>Email: admin@test.com | Password: admin123</code>
          </div>
        </div>
      </div>
    </div>
  );
}
