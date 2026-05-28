import React from 'react';
import Navbar from '../components/Navbar';
import './CarDetail.css';

export default function CarDetail() {
  return (
    <div className="cd-root">
      <Navbar />
      <div className="cd-container">
        <button className="cd-back">← Back to results</button>

        <div className="cd-layout">

          {/* Left Column */}
          <div className="cd-left">

            {/* Gallery */}
            <div className="cd-gallery">
              <div className="cd-main-img">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" alt="Car" />
                <button className="cd-wish">♡</button>
              </div>
              <div className="cd-thumbs">
                <div className="cd-thumb active"><img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&q=80" alt="t1" /></div>
                <div className="cd-thumb"><img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&q=80" alt="t2" /></div>
                <div className="cd-thumb"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&q=80" alt="t3" /></div>
              </div>
            </div>

            {/* Full Specs */}
            <div className="cd-section">
              <h3 className="section-title">Full Specifications</h3>
              <div className="specs-grid">
                <div className="spec-item"><span className="spec-label">Transmission</span><span className="spec-value">Manual</span></div>
                <div className="spec-item"><span className="spec-label">Fuel</span><span className="spec-value">Petrol</span></div>
                <div className="spec-item"><span className="spec-label">Seats</span><span className="spec-value">5</span></div>
                <div className="spec-item"><span className="spec-label">Doors</span><span className="spec-value">5</span></div>
                <div className="spec-item"><span className="spec-label">AC</span><span className="spec-value">Yes</span></div>
                <div className="spec-item"><span className="spec-label">SS Candles</span><span className="spec-value">555</span></div>
              </div>
            </div>

            {/* Damage Map */}
            <div className="cd-section">
              <h3 className="section-title">Damage Assessment Map</h3>
              <div className="damage-map">
                <div className="damage-car-icon">🚗</div>
                <div className="damage-grid">
                  <div className="damage-item"><span className="dot green"></span><span>Front</span></div>
                  <div className="damage-item"><span className="dot green"></span><span>Rear</span></div>
                  <div className="damage-item"><span className="dot green"></span><span>Left</span></div>
                  <div className="damage-item"><span className="dot green"></span><span>Right</span></div>
                  <div className="damage-item"><span className="dot green"></span><span>Roof</span></div>
                  <div className="damage-item"><span className="dot green"></span><span>Interior</span></div>
                </div>
                <p className="damage-note">✅ No pre-existing damage reported</p>
              </div>
            </div>

            {/* Fuel Policy */}
            <div className="cd-section">
              <h3 className="section-title">Detailed Fuel Policy</h3>
              <ul className="policy-list">
                <li>50% 2-assessment on fuel</li>
                <li>Balanced fare minutariat</li>
                <li>Detailed fuel ortacs apply</li>
              </ul>
            </div>

            {/* Insurance */}
            <div className="cd-section">
              <div className="insurance-row">
                <div>
                  <h3 className="section-title" style={{ marginBottom: 2 }}>Insurance Options</h3>
                  <p className="ins-sub">Insurance Customs</p>
                </div>
                <div className="toggle on">
                  <span className="toggle-knob"></span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="cd-section">
              <h3 className="section-title">Reviews</h3>
              <div className="reviews-list">
                <div className="review-card">
                  <div className="review-top">
                    <div className="reviewer-avatar">R</div>
                    <div><strong>Rahul M.</strong><div className="review-stars">★★★★★</div></div>
                    <span className="review-date">2 days ago</span>
                  </div>
                  <p className="review-text">Great experience! Clean car, easy pickup process.</p>
                </div>
                <div className="review-card">
                  <div className="review-top">
                    <div className="reviewer-avatar">P</div>
                    <div><strong>Priya S.</strong><div className="review-stars">★★★★☆</div></div>
                    <span className="review-date">1 week ago</span>
                  </div>
                  <p className="review-text">Very smooth ride. Would recommend to friends.</p>
                </div>
                <div className="review-card">
                  <div className="review-top">
                    <div className="reviewer-avatar">A</div>
                    <div><strong>Amit K.</strong><div className="review-stars">★★★★★</div></div>
                    <span className="review-date">2 weeks ago</span>
                  </div>
                  <p className="review-text">Zero deposit was a big plus. Transparent pricing.</p>
                </div>
              </div>
            </div>

            {/* Pickup Map */}
            <div className="cd-section">
              <h3 className="section-title">Exact Pickup Location</h3>
              <div className="pickup-map">
                <span className="map-pin-big">📍</span>
                <span>Mahalaxmi Metro Station</span>
                <span className="map-dist">800m away · ~13 min walk</span>
              </div>
              <p className="pickup-option">🚗 Pickup / Delivery: 850m away · 15Transit</p>
            </div>

          </div>

          {/* Right Sticky Card */}
          <div className="cd-right">
            <div className="cd-sticky-card">
              <h2 className="cd-car-name">Maruti Swift · 5 Seater</h2>
              <div className="cd-rating">
                <span className="star">★</span><strong>4.6</strong>
                <span className="cd-reviews">(173 Reviews)</span>
              </div>
              <div className="cd-tags">
                <span className="tag">Manual</span>
                <span className="tag">Petrol</span>
                <span className="tag">1 Seat</span>
                <span className="tag">AC</span>
              </div>
              <div className="cd-price-block">
                <div className="cd-price">
                  <span className="price-main">₹3,499</span>
                  <span className="price-per">/day</span>
                </div>
                <div className="deposit-badge">🎉 Zero Deposit</div>
              </div>
              <div className="cd-location-info">📍 800m away (Mahalaxmi Metro)</div>
              <div className="social-proof">
                <div className="sp-item">👥 24+ users booked this today</div>
                <div className="sp-item">⭐ Top rated in your area</div>
                <div className="sp-item">🛡 Verified & insured</div>
              </div>
              <button className="btn-book-now">View Details & Book →</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
