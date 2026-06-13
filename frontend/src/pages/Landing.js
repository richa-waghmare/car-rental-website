import React from 'react';
import Navbar from '../components/Navbar';
import CarSearchResult from '../components/CarSearchResult';
import './Landing.css';

export default function Landing() {

  return (

    <div className="landing-root">

      <Navbar />

      {/* HERO */}
      <div className="landing-hero">

        <div className="hero-text">

          <span className="hero-tag">
            🚗 Rent Near You
          </span>

          <h1>
            Find Your Perfect <span>Ride</span>
          </h1>

          <p>
            Transparent pricing · Zero deposit · Instant pickup
          </p>

        </div>

      </div>

      <CarSearchResult />

    </div>
  );
}