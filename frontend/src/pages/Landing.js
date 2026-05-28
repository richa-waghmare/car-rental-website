import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Landing.css';

export default function Landing() {

  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [type, setType] = useState('');
  const [maxPrice, setMaxPrice] = useState(3000);

  const [cars, setCars] = useState([]);

  // FETCH CARS
  const fetchCars = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/cars/allcars',
        {
          params: {
            fuel,
            transmission,
            type,
            maxPrice
          }
        }
      );

      setCars(res.data);

      console.log(res.data);

    } catch (err) {

      console.error(err);

    }
  };

  // INITIAL FETCH
  useEffect(() => {

    fetchCars();

  }, []);

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

      {/* FILTER PANEL */}
      <div className="search-panel">

        <div className="search-panel-inner">

          {/* FUEL */}
          <div className="filter-section">

            <label>Fuel</label>

            <div className="chip-row">

              <button
                onClick={() => setFuel("Petrol")}
                className={`chip ${fuel === "Petrol" ? "active" : ""}`}
              >
                Petrol
              </button>

              <button
                onClick={() => setFuel("Diesel")}
                className={`chip ${fuel === "Diesel" ? "active" : ""}`}
              >
                Diesel
              </button>

            </div>

          </div>

          {/* TRANSMISSION */}
          <div className="filter-section">

            <label>Transmission</label>

            <div className="chip-row">

              <button
                onClick={() => setTransmission("Automatic")}
                className={`chip ${transmission === "Automatic" ? "active" : ""}`}
              >
                Automatic
              </button>

              <button
                onClick={() => setTransmission("Manual")}
                className={`chip ${transmission === "Manual" ? "active" : ""}`}
              >
                Manual
              </button>

            </div>

          </div>

          {/* TYPE */}
          <div className="filter-section">

            <label>Body Type</label>

            <div className="chip-row">

              <button
                onClick={() => setType("SUV")}
                className={`chip ${type === "SUV" ? "active" : ""}`}
              >
                SUV
              </button>

              <button
                onClick={() => setType("Hatchback")}
                className={`chip ${type === "Hatchback" ? "active" : ""}`}
              >
                Hatchback
              </button>

              <button
                onClick={() => setType("Sedan")}
                className={`chip ${type === "Sedan" ? "active" : ""}`}
              >
                Sedan
              </button>

            </div>

          </div>

          {/* PRICE */}
          <div className="filter-section full-width">

            <label>
              Max Price: ₹{maxPrice}
            </label>

            <input
              type="range"
              min={500}
              max={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="price-slider"
            />

          </div>

          {/* SEARCH BUTTON */}
          <button
            className="btn-search"
            onClick={fetchCars}
          >
            🔍 Search
          </button>

        </div>

      </div>

      {/* CAR LIST */}
      <div className="cars-container">

        <h2>Available Cars</h2>

        {cars.length === 0 ? (

          <p>No cars found</p>

        ) : (

          <div className="car-grid">

            {cars.map((car) => (

              <div
                key={car._id}
                className="car-card"
              >

             <img
  src={`http://localhost:5000/${car.images[0].replace(/\\/g, "/")}`}
  alt={car.name}
  className="car-image"
/>

              <div className="car-details">
                <h3>{car.name}</h3>
  <span>{car.fuel}</span>
  <span>{car.transmission}</span>
  <span>{car.type}</span>
</div>

<p>
  ₹{car.priceperday}/day
</p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}