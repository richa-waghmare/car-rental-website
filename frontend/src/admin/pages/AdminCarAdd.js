import React, { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import "./AdminCarAdd.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminCarAdd() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    Fuel: "",
    transmission: "",
    seats: "",
    priceperday: "",
    regNumber: "",
    images: []
  });

  const [imagePreview, setImagePreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // Check admin auth
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.role !== 'admin') {
      nav('/AdminLogin');
    }
  }, [nav]);

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  // Handle multiple images with max 10
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 10) {
      setErrors({ images: "❌ Maximum 10 images allowed" });
      return;
    }

    if (files.length === 0) {
      setImagePreview([]);
      setFormData({ ...formData, images: [] });
      return;
    }

    // Create preview URLs
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImagePreview(previews);
    setFormData({
      ...formData,
      images: files
    });

    setErrors({ ...errors, images: "" });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Car name is required";
    if (!formData.type) newErrors.type = "Body type is required";
    if (!formData.Fuel) newErrors.Fuel = "Fuel type is required";
    if (!formData.transmission) newErrors.transmission = "Transmission is required";
    if (!formData.seats || formData.seats < 1) newErrors.seats = "Seats must be at least 1";
    if (!formData.priceperday || formData.priceperday < 100) newErrors.priceperday = "Price must be at least ₹100";
    if (imagePreview.length === 0) newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccessMsg("");

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("type", formData.type);
      data.append("Fuel", formData.Fuel);
      data.append("transmission", formData.transmission);
      data.append("seats", formData.seats);
      data.append("priceperday", formData.priceperday);
      data.append("regNumber", formData.regNumber);

      // Add images (max 10)
      for (let i = 0; i < formData.images.length && i < 10; i++) {
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

      setSuccessMsg("✅ Car added successfully! Redirecting...");
      setTimeout(() => {
        nav("/AdminDashboard");
      }, 1500);
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Failed to create car. Please try again.';
      setErrors({ submit: `❌ ${errorMsg}` });
    } finally {
      setLoading(false);
    }
  };

  // Remove image from preview
  const removeImage = (index) => {
    const updated = imagePreview.filter((_, i) => i !== index);
    setImagePreview(updated);

    const filesArray = Array.from(formData.images);
    filesArray.splice(index, 1);

    setFormData({
      ...formData,
      images: filesArray
    });
  };

  return (
    <AdminLayout>
      <div className="aca-root">
        <div className="aca-container">
          <div className="aca-header">
            <h1 className="aca-title">Add New Vehicle</h1>
            <p className="aca-subtitle">Fill all details to add a new car to your fleet</p>
          </div>

          {successMsg && <div className="aca-success-msg">{successMsg}</div>}
          {errors.submit && <div className="aca-error-msg">{errors.submit}</div>}

          <form className="aca-form" onSubmit={handleSubmit}>
            <div className="aca-grid">
              {/* Car Name */}
              <div className="aca-form-group">
                <label>Vehicle Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Maruti Swift"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="aca-error">{errors.name}</span>}
              </div>

              {/* Body Type */}
              <div className="aca-form-group">
                <label>Body Type *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={errors.type ? 'error' : ''}
                >
                  <option value="">Select Type</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
                {errors.type && <span className="aca-error">{errors.type}</span>}
              </div>

              {/* Fuel Type */}
              <div className="aca-form-group">
                <label>Fuel Type *</label>
                <select
                  name="Fuel"
                  value={formData.Fuel}
                  onChange={handleChange}
                  className={errors.Fuel ? 'error' : ''}
                >
                  <option value="">Select Fuel</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                </select>
                {errors.Fuel && <span className="aca-error">{errors.Fuel}</span>}
              </div>

              {/* Transmission */}
              <div className="aca-form-group">
                <label>Transmission *</label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  className={errors.transmission ? 'error' : ''}
                >
                  <option value="">Select</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
                {errors.transmission && <span className="aca-error">{errors.transmission}</span>}
              </div>

              {/* Seats */}
              <div className="aca-form-group">
                <label>Seats *</label>
                <input
                  type="number"
                  name="seats"
                  placeholder="e.g., 5"
                  min="1"
                  value={formData.seats}
                  onChange={handleChange}
                  className={errors.seats ? 'error' : ''}
                />
                {errors.seats && <span className="aca-error">{errors.seats}</span>}
              </div>

              {/* Price Per Day */}
              <div className="aca-form-group">
                <label>Price Per Day (₹) *</label>
                <input
                  type="number"
                  name="priceperday"
                  placeholder="₹ Enter price"
                  min="100"
                  value={formData.priceperday}
                  onChange={handleChange}
                  className={errors.priceperday ? 'error' : ''}
                />
                {errors.priceperday && <span className="aca-error">{errors.priceperday}</span>}
              </div>

              {/* Registration Number */}
              <div className="aca-form-group">
                <label>Registration Number</label>
                <input
                  type="text"
                  name="regNumber"
                  placeholder="e.g., MH 02 AB 1234"
                  value={formData.regNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Images Section */}
            <div className="aca-images-section">
              <label>Vehicle Photos (Max 10) *</label>
              {errors.images && <span className="aca-error">{errors.images}</span>}

              <div className="aca-upload-area">
                <input
                  type="file"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="aca-file-input"
                  id="imageInput"
                />
                <label htmlFor="imageInput" className="aca-upload-label">
                  <div className="aca-upload-icon">📷</div>
                  <p className="aca-upload-text">Click to upload or drag & drop</p>
                  <p className="aca-upload-hint">PNG, JPG up to 10 images</p>
                </label>
              </div>

              {/* Image Preview */}
              {imagePreview.length > 0 && (
                <div className="aca-preview-grid">
                  {imagePreview.map((img, idx) => (
                    <div key={idx} className="aca-preview-item">
                      <img src={img.preview} alt={`preview-${idx}`} />
                      <button
                        type="button"
                        className="aca-remove-btn"
                        onClick={() => removeImage(idx)}
                      >
                        ✕
                      </button>
                      <span className="aca-preview-num">{idx + 1}/{imagePreview.length}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="aca-actions">
              <button type="submit" className="aca-btn-submit" disabled={loading}>
                {loading ? "⏳ Creating..." : "✅ Create Vehicle"}
              </button>
              <button
                type="button"
                className="aca-btn-cancel"
                onClick={() => nav("/AdminDashboard")}
              >
                ← Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}