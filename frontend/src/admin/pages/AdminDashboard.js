import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import './AdminDashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [error, setError] = useState('');

  // Check admin auth
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.role !== 'admin') {
      navigate('/AdminLogin');
    }
  }, [navigate]);

  // Fetch cars
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('http://localhost:5000/api/cars/allcars');
      setCars(res.data || []);
      setFilteredCars(res.data || []);
    } catch (err) {
      console.error(err);
      setError('Failed to load fleet inventory');
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  // Search and filter
  useEffect(() => {
    let result = cars;

    // Search by name
    if (searchTerm) {
      result = result.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (filterType) {
      result = result.filter(car => car.type === filterType);
    }

    // Sort
    if (sortBy === 'price-low') {
      result = result.sort((a, b) => a.priceperday - b.priceperday);
    } else if (sortBy === 'price-high') {
      result = result.sort((a, b) => b.priceperday - a.priceperday);
    } else if (sortBy === 'newest') {
      result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredCars(result);
  }, [searchTerm, filterType, sortBy, cars]);

  const handleDeleteCar = async (carId) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/cars/car/${carId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('✅ Car deleted successfully');
      fetchCars();
    } catch (err) {
      alert(`❌ ${err.response?.data?.message || 'Delete failed'}`);
    }
  };

  return (
    <AdminLayout>
      <div className="fi-root">
        {/* Header */}
        <div className="fi-header">
          <div className="fi-header-left">
            <h1 className="fi-title">Fleet Inventory</h1>
            <p className="fi-subtitle">Manage and track your premium car collection effortlessly.</p>
          </div>

          <button
            className="fi-btn-add"
            onClick={() => navigate('/AdminCarAdd')}
          >
            ➕ Add New Car
          </button>
        </div>

        {/* Stats */}
        <div className="fi-stats">
          <div className="fi-stat-card">
            <div className="fi-stat-label">Total Fleet</div>
            <div className="fi-stat-value">{cars.length}</div>
          </div>
          <div className="fi-stat-card">
            <div className="fi-stat-label">Available</div>
            <div className="fi-stat-value">{cars.filter(c => c.status === 'Available').length}</div>
          </div>
          <div className="fi-stat-card">
            <div className="fi-stat-label">Booked</div>
            <div className="fi-stat-value">{cars.filter(c => c.status === 'Booked').length}</div>
          </div>
          <div className="fi-stat-card">
            <div className="fi-stat-label">Maintenance</div>
            <div className="fi-stat-value">2</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="fi-controls">
          <div className="fi-search-wrap">
            <input
              type="text"
              placeholder="🔍 Search by name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="fi-search-input"
            />
          </div>

          <div className="fi-filters">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="fi-filter-select"
            >
              <option value="">All Types</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="fi-sort-select"
            >
              <option value="newest">Sort: Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Content */}
        {error && <div className="fi-error-msg">{error}</div>}

        {loading ? (
          <div className="fi-loading">⏳ Loading fleet inventory...</div>
        ) : filteredCars.length === 0 ? (
          <div className="fi-empty-state">
            <div className="fi-empty-icon">🚗</div>
            <h3>No cars found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="fi-table-wrap">
            <table className="fi-table">
              <thead className="fi-thead">
                <tr>
                  <th className="fi-th">Vehicle Details</th>
                  <th className="fi-th">Reg. Number</th>
                  <th className="fi-th">Status</th>
                  <th className="fi-th">Actions</th>
                </tr>
              </thead>
              <tbody className="fi-tbody">
                {filteredCars.map((car) => (
                  <tr key={car._id} className="fi-tr">
                    <td className="fi-td fi-td-vehicle">
                      <div className="fi-vehicle-info">
                        <div className="fi-vehicle-image">
                          {car.images && car.images[0] ? (
                            <img
                              src={`http://localhost:5000/${String(car.images[0]).replace(/\\/g, '/')}`}
                              alt={car.name}
                            />
                          ) : (
                            <div className="fi-image-placeholder">🚗</div>
                          )}
                        </div>
                        <div className="fi-vehicle-details">
                          <h4 className="fi-vehicle-name">{car.name}</h4>
                          <div className="fi-vehicle-specs">
                            <span>{car.type}</span>
                            <span className="fi-spec-dot">•</span>
                            <span>{car.fuel}</span>
                            <span className="fi-spec-dot">•</span>
                            <span>₹{car.priceperday}/day</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="fi-td">
                      <span className="fi-reg-number">{car.regNumber || 'N/A'}</span>
                    </td>
                    <td className="fi-td">
                      <span className={`fi-status-badge fi-status-${car.status.toLowerCase()}`}>
                        {car.status === 'Available' ? '✓' : '✕'} {car.status}
                      </span>
                    </td>
                    <td className="fi-td fi-td-actions">
                      <button
                        className="fi-btn-edit"
                        onClick={() => navigate(`/AdminCarEdit/${car._id}`)}
                        title="Edit car"
                      >
                        ✏️
                      </button>
                      <button
                        className="fi-btn-delete"
                        onClick={() => handleDeleteCar(car._id)}
                        title="Delete car"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {filteredCars.length > 0 && (
          <div className="fi-pagination">
            <button className="fi-page-btn fi-page-btn-active">1</button>
            <button className="fi-page-btn">2</button>
            <button className="fi-page-btn">3</button>
            <span className="fi-page-dots">...</span>
            <button className="fi-page-btn">→</button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
                