import React from 'react';
import AdminLayout from '../components/AdminLayout';
import './AdminDashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function AdminDashboard() {
  const [cars, setCars] = useState([]);

  useEffect(() => {

  const fetchCars = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/cars/allcars"
      );

      setCars(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  fetchCars();

}, []);
  return (
    <AdminLayout>
      <div className="adash-root">

        <div className="adash-header">
          <div>
            <h1 className="adash-title">Dashboard</h1>
            <p className="adash-sub">Welcome back, Admin · Saturday, Apr 11 2026</p>
          </div>
          <button className="adash-export-btn">Export Report ↓</button>
        </div>

        {/* Stat Cards */}
        <div className="adash-stats">
          <div className="stat-card">
            <div className="stat-card-top"><span className="stat-icon">📋</span><span className="stat-change up">+12%</span></div>
            <div className="stat-val">1,240</div>
            <div className="stat-label">Total Bookings</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-top"><span className="stat-icon">🚗</span><span className="stat-change up">+3</span></div>
            <div className="stat-val">{cars.length}</div>
            <div className="stat-label">Active Cars</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-top"><span className="stat-icon">💰</span><span className="stat-change up">+8.4%</span></div>
            <div className="stat-val">₹9.2L</div>
            <div className="stat-label">Monthly Revenue</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-top"><span className="stat-icon">⏳</span><span className="stat-change down">-5</span></div>
            <div className="stat-val">17</div>
            <div className="stat-label">Pending Returns</div>
          </div>
        </div>

        <div className="adash-mid">

          {/* Bar Chart */}
          <div className="adash-card adash-chart-card">
            <div className="adash-card-header">
              <h3>Revenue Overview</h3>
              <div className="chart-period-tabs">
                <button className="active">Monthly</button>
                <button>Weekly</button>
              </div>
            </div>
            <div className="bar-chart">
              <div className="bar-group">
                <div className="bar-wrap"><div className="bar-fill" style={{ height: '55%' }}><span className="bar-tip">₹55K</span></div></div>
                <span className="bar-label">Nov</span>
              </div>
              <div className="bar-group">
                <div className="bar-wrap"><div className="bar-fill" style={{ height: '72%' }}><span className="bar-tip">₹72K</span></div></div>
                <span className="bar-label">Dec</span>
              </div>
              <div className="bar-group">
                <div className="bar-wrap"><div className="bar-fill" style={{ height: '61%' }}><span className="bar-tip">₹61K</span></div></div>
                <span className="bar-label">Jan</span>
              </div>
              <div className="bar-group">
                <div className="bar-wrap"><div className="bar-fill" style={{ height: '68%' }}><span className="bar-tip">₹68K</span></div></div>
                <span className="bar-label">Feb</span>
              </div>
              <div className="bar-group">
                <div className="bar-wrap"><div className="bar-fill" style={{ height: '80%' }}><span className="bar-tip">₹80K</span></div></div>
                <span className="bar-label">Mar</span>
              </div>
              <div className="bar-group">
                <div className="bar-wrap"><div className="bar-fill" style={{ height: '92%' }}><span className="bar-tip">₹92K</span></div></div>
                <span className="bar-label">Apr</span>
              </div>
            </div>
          </div>

          {/* Top Cars */}
          <div className="adash-card">
            <div className="adash-card-header"><h3>Top Performing Cars</h3></div>
            <div className="top-cars-list">
              <div className="top-car-row">
                <span className="top-car-rank">#1</span>
                <div className="top-car-info"><div className="top-car-name">Maruti Swift</div><div className="top-car-meta">320 bookings · ⭐ 4.6</div></div>
                <div className="top-car-revenue">₹11.2L</div>
              </div>
              <div className="top-car-row">
                <span className="top-car-rank">#2</span>
                <div className="top-car-info"><div className="top-car-name">Honda City</div><div className="top-car-meta">210 bookings · ⭐ 4.8</div></div>
                <div className="top-car-revenue">₹10.5L</div>
              </div>
              <div className="top-car-row">
                <span className="top-car-rank">#3</span>
                <div className="top-car-info"><div className="top-car-name">Mahindra XUV300</div><div className="top-car-meta">180 bookings · ⭐ 4.4</div></div>
                <div className="top-car-revenue">₹9.9L</div>
              </div>
              <div className="top-car-row">
                <span className="top-car-rank">#4</span>
                <div className="top-car-info"><div className="top-car-name">Hyundai i20</div><div className="top-car-meta">150 bookings · ⭐ 4.5</div></div>
                <div className="top-car-revenue">₹5.2L</div>
              </div>
            </div>
          </div>

        </div>

        {/* Recent Bookings Table */}
        <div className="adash-card">
          <div className="adash-card-header">
            <h3>Recent Bookings</h3>
            <button className="adash-view-all">View all →</button>
          </div>
          <div className="adash-table-wrap">
            <table className="adash-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Car</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="booking-id-cell">#B-0023853126</td>
                  <td>Rahul Mehta</td>
                  <td>Maruti Swift</td>
                  <td>Apr 11</td>
                  <td><strong>₹3,499</strong></td>
                  <td><span className="status-badge status-active">Active</span></td>
                </tr>
                <tr>
                  <td className="booking-id-cell">#B-0023853120</td>
                  <td>Priya Sharma</td>
                  <td>Honda City</td>
                  <td>Apr 10</td>
                  <td><strong>₹4,999</strong></td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                </tr>
                <tr>
                  <td className="booking-id-cell">#B-0023853115</td>
                  <td>Amit Kumar</td>
                  <td>Mahindra XUV300</td>
                  <td>Apr 10</td>
                  <td><strong>₹5,499</strong></td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                </tr>
                <tr>
                  <td className="booking-id-cell">#B-0023853110</td>
                  <td>Sneha Patil</td>
                  <td>Maruti Swift</td>
                  <td>Apr 09</td>
                  <td><strong>₹3,499</strong></td>
                  <td><span className="status-badge status-cancelled">Cancelled</span></td>
                </tr>
                <tr>
                  <td className="booking-id-cell">#B-0023853104</td>
                  <td>Rohan Joshi</td>
                  <td>Honda City</td>
                  <td>Apr 09</td>
                  <td><strong>₹4,999</strong></td>
                  <td><span className="status-badge status-active">Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
