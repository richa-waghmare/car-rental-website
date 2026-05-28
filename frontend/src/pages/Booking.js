import React from 'react';
import Navbar from '../components/Navbar';
import './Booking.css';

export default function Booking() {
  return (
    <div className="bk-root">
      <Navbar />
      <div className="bk-container">
        <button className="bk-back">← Back</button>
        <h2 className="bk-title">Booking & Payment</h2>

        <div className="bk-layout">

          {/* Left */}
          <div className="bk-left">

            {/* Trip Summary */}
            <div className="bk-section">
              <h3 className="bk-section-title">Trip Summary</h3>
              <div className="trip-car-row">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&q=80" alt="car" className="trip-car-img" />
                <div>
                  <div className="trip-car-name">Maruti Swift · 5 Seater</div>
                  <div className="trip-car-tags">
                    <span className="tag">Manual</span>
                    <span className="tag">Petrol</span>
                    <span className="tag">AC</span>
                  </div>
                  <div className="trip-location">📍 Mahalaxmi Metro · 800m away</div>
                </div>
              </div>
              <div className="trip-dates">
                <div className="trip-date-item">
                  <span className="tdi-label">Pickup</span>
                  <span className="tdi-val">Mon, 14 Apr · 10:00 AM</span>
                </div>
                <div className="trip-date-divider">→</div>
                <div className="trip-date-item">
                  <span className="tdi-label">Return</span>
                  <span className="tdi-val">Tue, 15 Apr · 10:00 AM</span>
                </div>
              </div>
            </div>

            {/* Add-Ons */}
            <div className="bk-section">
              <h3 className="bk-section-title">Add-On Options</h3>
              <div className="addon-list">
                <label className="addon-item">
                  <input type="checkbox" defaultChecked />
                  <span className="addon-label">Child Seat (child seat)</span>
                  <span className="addon-price">+₹299</span>
                </label>
                <label className="addon-item">
                  <input type="checkbox" />
                  <span className="addon-label">Child car cradle</span>
                </label>
                <label className="addon-item">
                  <input type="checkbox" />
                  <span className="addon-label">Child Seat (etc.)</span>
                </label>
              </div>
            </div>

            {/* Insurance */}
            <div className="bk-section">
              <h3 className="bk-section-title">Insurance Selection</h3>
              <div className="insurance-options">
                <label className="ins-option">
                  <input type="radio" name="ins" defaultChecked />
                  <span>No Insurance</span>
                </label>
                <label className="ins-option">
                  <input type="radio" name="ins" />
                  <span>Basic Insurance <strong>+₹499</strong></span>
                </label>
              </div>
            </div>

            {/* Payment */}
            <div className="bk-section">
              <h3 className="bk-section-title">Payment Method</h3>
              <p className="pay-sub">Multiple localized payment options</p>
              <div className="pay-methods">
                <button className="pay-method-btn active">
                  <span className="pm-icon">₹</span><span>UPI</span>
                </button>
                <button className="pay-method-btn">
                  <span className="pm-icon">💳</span><span>Card</span>
                </button>
                <button className="pay-method-btn">
                  <span className="pm-icon">👜</span><span>Wallet</span>
                </button>
                <button className="pay-method-btn">
                  <span className="pm-icon">⏳</span><span>Pay Later</span>
                </button>
              </div>
              <div className="pay-detail">
                <input type="text" placeholder="Enter UPI ID (e.g. name@upi)" className="pay-input" />
              </div>
            </div>

          </div>

          {/* Right Price Summary */}
          <div className="bk-right">
            <div className="price-summary-card">
              <h3 className="ps-title">Final Cost</h3>
              <div className="ps-price-big">₹3,499</div>
              <div className="ps-breakdown">
                <div className="ps-row"><span>Total Summary</span><span>₹6,998</span></div>
                <div className="ps-row discount"><span>Govt. Approved Discount</span><span>-₹965</span></div>
                <div className="ps-row"><span>Child Seat</span><span>₹299</span></div>
                <div className="ps-divider"></div>
                <div className="ps-row total"><span>Total Cost</span><span>₹3,499</span></div>
              </div>
              <button className="btn-cart-cost">Cart Cost — Proceed →</button>
              <div className="trust-badges">
                <span>🔒 Secure Payment</span>
                <span>📄 Instant Confirmation</span>
                <span>🛡 Insured Ride</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
