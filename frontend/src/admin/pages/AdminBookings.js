import React from 'react';
import AdminLayout from '../components/AdminLayout';
import './AdminBookings.css';

export default function AdminBookings() {
  return (
    <AdminLayout>
      <div className="abk-root">

        <div className="abk-header">
          <div>
            <h1 className="abk-title">Bookings</h1>
            <p className="abk-sub">6 total bookings</p>
          </div>
          <button className="abk-export">Export CSV ↓</button>
        </div>

        <div className="abk-summary">
          <div className="sum-card sum-active"><div className="sum-count">2</div><div className="sum-label">Active</div></div>
          <div className="sum-card sum-completed"><div className="sum-count">3</div><div className="sum-label">Completed</div></div>
          <div className="sum-card sum-cancelled"><div className="sum-count">1</div><div className="sum-label">Cancelled</div></div>
          <div className="sum-card sum-revenue"><div className="sum-count">₹43,992</div><div className="sum-label">Total Revenue</div></div>
        </div>

        <div className="abk-toolbar">
          <div className="abk-search-wrap">
            <span>🔍</span>
            <input type="text" placeholder="Search by name, booking ID, or car..." className="abk-search" />
          </div>
          <div className="abk-tabs">
            <button className="filter-tab active">All</button>
            <button className="filter-tab">Active</button>
            <button className="filter-tab">Completed</button>
            <button className="filter-tab">Cancelled</button>
          </div>
        </div>

        <div className="abk-card">
          <div className="abk-table-wrap">
            <table className="abk-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Car</th>
                  <th>Pickup</th>
                  <th>Duration</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bid-cell">#B-0023853126</td>
                  <td><div className="user-cell"><div className="user-avatar">R</div><div><div className="user-name">Rahul Mehta</div><div className="user-phone">9876543210</div></div></div></td>
                  <td>Maruti Swift</td>
                  <td className="pickup-cell">Mahalaxmi Metro</td>
                  <td className="duration-cell">Apr 11 → Apr 12</td>
                  <td><strong>₹3,499</strong></td>
                  <td><span className="pay-badge">UPI</span></td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td><button className="action-btn-view">View</button></td>
                </tr>
                <tr>
                  <td className="bid-cell">#B-0023853120</td>
                  <td><div className="user-cell"><div className="user-avatar">P</div><div><div className="user-name">Priya Sharma</div><div className="user-phone">9876500001</div></div></div></td>
                  <td>Honda City</td>
                  <td className="pickup-cell">Dadar Station</td>
                  <td className="duration-cell">Apr 10 → Apr 11</td>
                  <td><strong>₹4,999</strong></td>
                  <td><span className="pay-badge">Card</span></td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                  <td><button className="action-btn-view">View</button></td>
                </tr>
                <tr>
                  <td className="bid-cell">#B-0023853115</td>
                  <td><div className="user-cell"><div className="user-avatar">A</div><div><div className="user-name">Amit Kumar</div><div className="user-phone">9812345678</div></div></div></td>
                  <td>Mahindra XUV300</td>
                  <td className="pickup-cell">Bandra West</td>
                  <td className="duration-cell">Apr 10 → Apr 12</td>
                  <td><strong>₹10,998</strong></td>
                  <td><span className="pay-badge">UPI</span></td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                  <td><button className="action-btn-view">View</button></td>
                </tr>
                <tr>
                  <td className="bid-cell">#B-0023853110</td>
                  <td><div className="user-cell"><div className="user-avatar">S</div><div><div className="user-name">Sneha Patil</div><div className="user-phone">9800012345</div></div></div></td>
                  <td>Maruti Swift</td>
                  <td className="pickup-cell">Andheri Metro</td>
                  <td className="duration-cell">Apr 09 → Apr 10</td>
                  <td><strong>₹3,499</strong></td>
                  <td><span className="pay-badge">Wallet</span></td>
                  <td><span className="status-badge status-cancelled">Cancelled</span></td>
                  <td><button className="action-btn-view">View</button></td>
                </tr>
                <tr>
                  <td className="bid-cell">#B-0023853104</td>
                  <td><div className="user-cell"><div className="user-avatar">R</div><div><div className="user-name">Rohan Joshi</div><div className="user-phone">9911223344</div></div></div></td>
                  <td>Honda City</td>
                  <td className="pickup-cell">Dadar Station</td>
                  <td className="duration-cell">Apr 09 → Apr 10</td>
                  <td><strong>₹4,999</strong></td>
                  <td><span className="pay-badge">Pay Later</span></td>
                  <td><span className="status-badge status-active">Active</span></td>
                  <td><button className="action-btn-view">View</button></td>
                </tr>
                <tr>
                  <td className="bid-cell">#B-0023853100</td>
                  <td><div className="user-cell"><div className="user-avatar">K</div><div><div className="user-name">Kavya Nair</div><div className="user-phone">9922334455</div></div></div></td>
                  <td>Toyota Innova</td>
                  <td className="pickup-cell">Kurla Station</td>
                  <td className="duration-cell">Apr 08 → Apr 10</td>
                  <td><strong>₹15,998</strong></td>
                  <td><span className="pay-badge">Card</span></td>
                  <td><span className="status-badge status-completed">Completed</span></td>
                  <td><button className="action-btn-view">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
