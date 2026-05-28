import React from "react";
import AdminLayout from '../components/AdminLayout';
import { useParams , useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import "./AdminCarEdit.css";
export default function AdminCarEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
const [car, setcar] = useState({
  name: "",
  brand: "",
  type: "",
  Fuel: "",
  transmission: "",
  seats: "",
  priceperday: "",
  images: []
});
const [editMode, setEditMode] = useState(false);
    useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/cars/car/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setcar(res.data);
        console.log(res.data);
        

      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

   
const handleChange = (e) => {
  const { name, value } = e.target;

  setcar({
    ...car,
    [name]: value
  });
};

const handleImageChange = (e) => {
  setcar({
    ...car,
    images: e.target.files
  });
};
  
  const handleSave = async (e) => {
      e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/cars/car/${id}`,
        car,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEditMode(false);
      alert("Car updated ✔️");

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <AdminLayout>
      
<div className="addcar-container">

        <div className="addcar-card">

          <h2 className="addcar-title">Edit The Car</h2>

          <p className="addcar-subtitle">
            Fill all details to edit the car
          </p>

          <form className="addcar-form"  onSubmit={handleSave}>

            {/* 🔹 Car Name */}
            <div className="form-group">
              <label>Car Name</label>

              <input
                type="text"
                name="name"
                value={car.name}
                placeholder="Enter car name"
                onChange={handleChange}
              />
            </div>

            {/* 🔹 Brand */}
            <div className="form-group">
              <label>Brand</label>

              <input
                type="text"
                name="brand"
                value={car.Brand}
                placeholder="Enter brand"
                onChange={handleChange}
              />
            </div>

            {/* 🔹 Type */}
            <div className="form-group">
              <label>Body Type</label>

              <select
                name="type"
                value={car.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
              </select>
            </div>

            {/* 🔹 Fuel */}
            <div className="form-group">
              <label>Fuel Type</label>

              <select
                name="Fuel"
                value={car.Fuel}
                onChange={handleChange}
              >
                <option value="">Select Fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            {/* 🔹 Transmission */}
            <div className="form-group">
              <label>Transmission</label>

              <select
                name="transmission"
                value={car.transmission}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Manual">Manual</option>
                <option value="Auto">Auto</option>
              </select>
            </div>

            {/* 🔹 Seats */}
            <div className="form-group">
              <label>Seats</label>

              <input
                type="number"
                name="seats"
                value={car.seats}
                placeholder="Enter seats"
                onChange={handleChange}
              />
            </div>

            {/* 🔹 Price */}
            <div className="form-group">
              <label>Price Per Day</label>

              <input
                type="number"
                name="priceperday"
                value={car.priceperday}
                placeholder="₹ Enter price"
                onChange={handleChange}
              />
            </div>

            {/* 🔥 Multiple Images */}
            <div className="form-group">
              <label>Car Images</label>

              <input
                type="file"
                name="images"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />

              {/* 🔥 Preview Selected Images */}
              <div className="image-preview-row">

               {Array.from(car.images).map((img, index) => (

  <img
    key={index}
    src={
      typeof img === "string"
        ? `http://localhost:5000/${img}`
        : URL.createObjectURL(img)
    }
    alt="preview"
    className="preview-image"
  />

))}

              </div>
            </div>

            {/* 🔥 Submit */}
            <button
              type="submit"
              className="btn-addcar"
            >
              Save Changes
            </button>

          </form>

        </div>

      </div>
    </AdminLayout>
  );
}