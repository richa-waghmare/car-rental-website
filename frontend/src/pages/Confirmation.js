import React from 'react';
import Navbar from '../components/Navbar';
import './Confirmation.css';

export default function Confirmation() {
  return (
    <div className="cf-root">
      <Navbar />

      <div className="cf-success-banner">
        <div className="cf-checkmark">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Your car is reserved and ready for pickup</p>
      </div>

      <div className="cf-container">
        <div className="cf-layout">

          {/* Left */}
          <div className="cf-left">

            <div className="cf-section">
              <div className="booking-id-row">
                <div>
                  <p className="booking-id-label">Booking ID</p>
                  <p className="booking-id">#B-0023853126</p>
                </div>
                <button className="btn-share">Share 📤</button>
              </div>
            </div>

            <div className="cf-section">
              <h3 className="cf-section-title">Trip Summary</h3>
              <div className="cf-row"><span className="cf-row-label">Final price</span><span className="cf-row-val accent">₹2,999</span></div>
              <div className="cf-row"><span className="cf-row-label">New BackupDelivery</span><span className="cf-row-val accent">₹2,998</span></div>
              <div className="cf-divider"></div>
              <div className="cf-row total"><span>Total Cost</span><span>₹2,998</span></div>
            </div>

            <div className="cf-section">
              <h3 className="cf-section-title">Exact Pickup with Navigation</h3>
              <div className="cf-map">
                <div className="route-line">
                  <div className="route-dot start">A</div>
                  <div className="route-path"></div>
                  <div className="route-dot end">B</div>
                </div>
                <div className="route-labels">
                  <span>Your Location</span>
                  <span>Mahalaxmi Metro</span>
                </div>
                <button className="btn-navigate">📍 Open in Maps</button>
              </div>
            </div>

            <div className="cf-section">
              <h3 className="cf-section-title">Trip Checklist</h3>
              <div className="checklist">
                <label className="check-item"><span className="check-box"></span><span>Damage check</span></label>
                <label className="check-item"><span className="check-box"></span><span>Trip Checklist (Damage check)</span></label>
                <label className="check-item done"><span className="check-box checked">✓</span><span>Fuel level verified</span></label>
                <label className="check-item done"><span className="check-box checked">✓</span><span>Documents ready</span></label>
              </div>
              <button className="btn-done">Done ✓</button>
            </div>

          </div>

          {/* Right */}
          <div className="cf-right">

            <div className="cf-section">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&q=80" alt="car" className="cf-car-img" />
              <h3 className="cf-car-name">Maruti Swift · 5 Seater</h3>
              <div className="cf-car-tags">
                <span className="tag">Manual</span>
                <span className="tag">Petrol</span>
                <span className="tag">AC</span>
              </div>
            </div>

            <div className="cf-section">
              <h3 className="cf-section-title">Pickup Details</h3>
              <div className="pickup-detail-row"><span className="pdl">📍 Location</span><span>Mahalaxmi Metro Station</span></div>
              <div className="pickup-detail-row"><span className="pdl">📅 Date</span><span>Mon, 14 Apr 2025</span></div>
              <div className="pickup-detail-row"><span className="pdl">⏰ Time</span><span>10:00 AM</span></div>
              <div className="pickup-detail-row"><span className="pdl">🚗 Return</span><span>Tue, 15 Apr · 10:00 AM</span></div>
            </div>

            <div className="cf-section cf-social-proof">
              <div className="sp-header">⭐ Great Choice!</div>
              <p>You saved <strong>₹965</strong> on this booking.</p>
              <div className="sp-avatars">
                <div className="sp-avatar" style={{ left: '0px' }}>R</div>
                <div className="sp-avatar" style={{ left: '22px' }}>P</div>
                <div className="sp-avatar" style={{ left: '44px' }}>A</div>
                <div className="sp-avatar" style={{ left: '66px' }}>S</div>
                <span className="sp-text">+173 others booked this car</span>
              </div>
            </div>

            <button className="btn-home">← Back to Home</button>

          </div>
        </div>
      </div>
    </div>
  );
}
