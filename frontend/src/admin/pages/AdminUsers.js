import React, { useEffect, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import './AdminUsers.css';
import axios from 'axios';

export default function AdminUsers() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/users/",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setUsers(res.data);

        console.log(res.data);

      } catch (err) {

        console.error(err);

      }
    };

    fetchUsers();

  }, []);

  // 🔥 SEARCH FILTER
  const filteredUsers = users.filter((user) => {

    return (

      user.name?.toLowerCase().includes(search.toLowerCase()) ||

      user.email?.toLowerCase().includes(search.toLowerCase()) ||

      user.phone?.includes(search)

    );

  });


  return (

    <AdminLayout>

      <div className="auser-root">

        {/* HEADER */}
        <div className="auser-header">

          <div>

            <h1 className="auser-title">
              Users
            </h1>

            <p className="auser-sub">
              {users.length} registered customers
            </p>

          </div>

        </div>

        {/* SUMMARY */}
        <div className="auser-summary">

          {/* TOTAL */}
          <div className="user-sum-card">

            <span className="user-sum-icon">
              👥
            </span>

            <div className="user-sum-count">
              {users.length}
            </div>

            <div className="user-sum-label">
              Total Users
            </div>

          </div>

          {/* ACTIVE */}
          <div className="user-sum-card">

            <span className="user-sum-icon">
              ✅
            </span>

            <div className="user-sum-count">
              {users.filter(u => u.status === "active").length}
            </div>

            <div className="user-sum-label">
              Active
            </div>

          </div>

          {/* BLOCKED */}
          <div className="user-sum-card">

            <span className="user-sum-icon">
              🚫
            </span>

            <div className="user-sum-count">
              {users.filter(u => u.status === "Blocked").length}
            </div>

            <div className="user-sum-label">
              Blocked
            </div>

          </div>

          {/* INACTIVE */}
          <div className="user-sum-card">

            <span className="user-sum-icon">
              💤
            </span>

            <div className="user-sum-count">
              {users.filter(u => u.status === "Inactive").length}
            </div>

            <div className="user-sum-label">
              Inactive
            </div>

          </div>

        </div>

        {/* TOOLBAR */}
        <div className="auser-toolbar">

          <div className="auser-search-wrap">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="auser-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="auser-tabs">

            <button className="filter-tab active">
              All
            </button>

          </div>

        </div>

        {/* TABLE */}
        <div className="auser-card">

          <div className="auser-table-wrap">

            <table className="auser-table">

              <thead>

                <tr>

                  <th>Customer</th>

                  <th>Phone</th>

                  <th>Joined</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.map((user) => (

                  <tr key={user._id}>

                    {/* USER */}
                    <td>

                      <div className="user-cell">

                        <div className="user-avatar">

                          {user.name?.charAt(0)}

                        </div>

                        <div>

                          <div className="user-name">
                            {user.name}
                          </div>

                          <div className="user-email">
                            {user.email}
                          </div>

                        </div>

                      </div>

                    </td>

                    {/* PHONE */}
                    <td className="phone-cell">

                      {user.phone}

                    </td>

                    {/* JOIN DATE */}
                    <td className="joined-cell">

                      {new Date(user.createdAt).toLocaleDateString()}

                    </td>

                    {/* STATUS */}
                    <td>

                      <span className={`status-badge 
                        ${user.status === "Active" ? "status-active" : ""}
                        ${user.status === "Blocked" ? "status-blocked" : ""}
                        ${user.status === "Inactive" ? "status-inactive" : ""}
                      `}>

                        {user.status}

                      </span>

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