import React from 'react';
import AdminLayout from '../components/AdminLayout';
import './AdminCars.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminCars() {

  const nav = useNavigate();

  const [cars, setCars] = useState([]);

  useEffect(() => {

    const fetchCars = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/cars/allcars"
        );

        setCars(res.data);

        console.log(res.data);

      } catch (err) {

        console.error(err);

      }
    };

    fetchCars();

  }, []);

  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this car?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/cars/car/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // 🔥 remove deleted car from UI
    setCars(
      cars.filter((car) => car._id !== id)
    );

    alert("Car deleted successfully ✔️");

  } catch (err) {

    console.error(err);

    alert("Failed to delete car ❌");

  }
};

  return (

    <AdminLayout>

      <div className="acars-root">

        {/* HEADER */}
        <div className="acars-header">

          <div>
            <h1 className="acars-title">
              Car Management
            </h1>

            <p className="acars-sub">
              {cars.length} cars in fleet
            </p>
          </div>

          <button
            className="btn-add-car"
            onClick={() => nav('/AdminCarAdd')}
          >
            + Add New Car
          </button>

        </div>

        {/* TOOLBAR */}
        <div className="acars-toolbar">

          <div className="acars-search-wrap">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search cars..."
              className="acars-search"
            />

          </div>

          <div className="acars-filter-tabs">

            <button className="filter-tab active">
              All
            </button>

            <button className="filter-tab">
              Available
            </button>

            <button className="filter-tab">
              Booked
            </button>

            <button className="filter-tab">
              Maintenance
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="acars-card">

          <div className="acars-table-wrap">

            <table className="acars-table">

              <thead>

                <tr>

                  <th>Car</th>

                  <th>Type</th>

                  <th>Fuel / Trans.</th>

                  <th>Price/Day</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>

              <tbody>

                {cars.map((car) => (

                  <tr key={car._id}>

                    {/* CAR IMAGE + NAME */}
                    <td>

                      <div className="car-cell">

                        <img
                          src={`http://localhost:5000/${car.images[0]}`}
                          alt={car.name}
                          className="car-thumb"
                        />

                        <span className="car-cell-name">
                          {car.name}
                        </span>

                      </div>

                    </td>

                    {/* TYPE */}
                    <td>

                      <span className="type-badge">
                        {car.type}
                      </span>

                    </td>

                    {/* FUEL */}
                    <td className="fuel-cell">

                      {car.fuel} · {car.transmission}

                    </td>

                    {/* PRICE */}
                    <td>

                      <strong>
                        ₹{car.priceperday}
                      </strong>

                    </td>

                    {/* STATUS */}
                    <td>

                      <span className="status-badge status-available">
                        Available
                      </span>

                    </td>

                    {/* ACTIONS */}
                    <td>

                      <div className="action-btns">

                        <button className="action-btn edit"  onClick={() => nav(`/AdminCarEdit/${car._id}`)}>
                          Edit
                        </button>
<button
  className="action-btn delete"
  onClick={() => handleDelete(car._id)}
>
  Delete
</button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </AdminLayout>

  );
}