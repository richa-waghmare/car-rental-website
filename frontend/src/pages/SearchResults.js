import React from 'react';
import Navbar from '../components/Navbar';
import './SearchResults.css';

export default function SearchResults() {
  return (
    <div className="sr-root">
      <Navbar />
      <div className="sr-container">

        <div className="sr-header">
          <div className="sr-title-row">
            <h2>Search Results</h2>
            <span className="sr-count">4 cars found</span>
          </div>
          <div className="sr-filter-row">
            <button className="filter-pill">Filter ✕</button>
            <button className="filter-pill">Filter ✕</button>
            <button className="filter-pill active">Ratings ✕</button>
            <div className="sort-select-wrap">
              <select className="sort-select">
                <option>Sort: Rating</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Distance</option>
              </select>
            </div>
          </div>
          <div className="sr-badge-row">
            <span className="sr-badge">📍 Logistics (Distance/Delivery)</span>
            <span className="sr-badge">₹ Transparent Price (0 Deposit)</span>
          </div>
        </div>

        <div className="car-list">

          {/* Card 1 */}
          <div className="car-card">
            <div className="car-card-img">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80" alt="Maruti Swift" />
              <span className="car-type-badge">Hatchback</span>
            </div>
            <div className="car-card-body">
              <div className="car-card-top">
                <div>
                  <div className="car-rating"><span className="star">★</span><strong>4.6</strong><span className="reviews">(173 Reviews)</span></div>
                  <h3 className="car-name">Maruti Swift · 5 Seater</h3>
                  <div className="car-tags">
                    <span className="tag">Manual</span>
                    <span className="tag">Petrol</span>
                    <span className="tag">AC</span>
                  </div>
                </div>
                <div className="car-price-col">
                  <div className="price-badge"><span className="price-main">₹3,499</span><span className="price-per">/day</span></div>
                  <div className="deposit-badge">0 Deposit</div>
                </div>
              </div>
              <div className="car-location">📍 800m away (Mahalaxmi Metro)</div>
              <div className="car-reg">Reg: MH 02 SN7 · DEPOSIT507</div>
              <button className="btn-view-book">View Details & Book →</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="car-card">
            <div className="car-card-img">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80" alt="Maruti Swift" />
              <span className="car-type-badge">Hatchback</span>
            </div>
            <div className="car-card-body">
              <div className="car-card-top">
                <div>
                  <div className="car-rating"><span className="star">★</span><strong>4.5</strong><span className="reviews">(122 Reviews)</span></div>
                  <h3 className="car-name">Maruti Swift · 5 Seater</h3>
                  <div className="car-tags">
                    <span className="tag">Auto</span>
                    <span className="tag">Petrol</span>
                    <span className="tag">AC</span>
                  </div>
                </div>
                <div className="car-price-col">
                  <div className="price-badge"><span className="price-main">₹3,499</span><span className="price-per">/day</span></div>
                  <div className="deposit-badge">0 Deposit</div>
                </div>
              </div>
              <div className="car-location">📍 500m away (Nahalasond Metro)</div>
              <div className="car-reg">Reg: MH 03 SC2 · DEPOSIT302</div>
              <button className="btn-view-book">View Details & Book →</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="car-card">
            <div className="car-card-img">
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80" alt="Honda City" />
              <span className="car-type-badge">Sedan</span>
            </div>
            <div className="car-card-body">
              <div className="car-card-top">
                <div>
                  <div className="car-rating"><span className="star">★</span><strong>4.8</strong><span className="reviews">(240 Reviews)</span></div>
                  <h3 className="car-name">Honda City · 5 Seater</h3>
                  <div className="car-tags">
                    <span className="tag">Auto</span>
                    <span className="tag">Petrol</span>
                    <span className="tag">AC</span>
                  </div>
                </div>
                <div className="car-price-col">
                  <div className="price-badge"><span className="price-main">₹4,999</span><span className="price-per">/day</span></div>
                  <div className="deposit-badge">0 Deposit</div>
                </div>
              </div>
              <div className="car-location">📍 1.2km away (Dadar Station)</div>
              <div className="car-reg">Reg: MH 04 HC1 · DEPOSIT801</div>
              <button className="btn-view-book">View Details & Book →</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
