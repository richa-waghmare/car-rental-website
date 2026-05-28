import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./AdminCarAdd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminCarAdd() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    type: "",
    Fuel: "",
    transmission: "",
    seats: "",
    priceperday: "",
    images: []
  });

  // 🔥 Handle Inputs
  const handleChange = (e) => {

    const { name, value, files } = e.target;

    // 🔥 Multiple Images
    if (name === "images") {
      setFormData({
        ...formData,
        images: files
      });
    }

    else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const data = new FormData();

    data.append("name", formData.name);
    data.append("brand", formData.brand);
    data.append("type", formData.type);
    data.append("Fuel", formData.Fuel);
    data.append("transmission", formData.transmission);
    data.append("seats", formData.seats);
    data.append("priceperday", formData.priceperday);

    // 🔥 multiple images
    for (let i = 0; i < formData.images.length; i++) {
      data.append("images", formData.images[i]);
    }

    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:5000/api/cars/create",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );
    alert("Car added successfully ✔️");
    console.log(res.data);
    nav("/AdminCars"); 

  } catch (err) {

    console.log(err.response?.data);

    alert(
      err.response?.data?.message
    );
  }
};
  return (
    <AdminLayout>

      <div className="addcar-container">

        <div className="addcar-card">

          <h2 className="addcar-title">Add New Car</h2>

          <p className="addcar-subtitle">
            Fill all details to add a new car
          </p>

          <form className="addcar-form"  onSubmit={handleSubmit}>

            {/* 🔹 Car Name */}
            <div className="form-group">
              <label>Car Name</label>

              <input
                type="text"
                name="name"
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
                placeholder="Enter brand"
                onChange={handleChange}
              />
            </div>

            {/* 🔹 Type */}
            <div className="form-group">
              <label>Body Type</label>

              <select
                name="type"
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
                onChange={handleChange}
              />

              {/* 🔥 Preview Selected Images */}
              <div className="image-preview-row">

                {Array.from(formData.images).map((img, index) => (

                  <img
                    key={index}
                    src={URL.createObjectURL(img)}
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
              Add Car
            </button>

          </form>

        </div>

      </div>

    </AdminLayout>
  );
}