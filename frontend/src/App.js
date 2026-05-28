import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Customer Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import SearchResults from './pages/SearchResults';
import CarDetail from './pages/CarDetail';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Userprofile from './pages/Userprofile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Admin Pages
// import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminCars from './admin/pages/AdminCars';
import AdminBookings from './admin/pages/AdminBookings';
import AdminUsers from './admin/pages/AdminUsers';
import AdminCarAdd from './admin/pages/AdminCarAdd';
import AdminCarEdit from './admin/pages/AdminCarEdit';
 function App() {
 return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/Userprofile" element={<Userprofile/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/reset-password/:token" element={<ResetPassword/>} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/AdminCars" element={<AdminCars/>} />
      <Route path="/AdminBookings" element={<AdminBookings/>} />
      <Route path="/AdminUsers" element={<AdminUsers/>} />
      <Route path="/AdminCarAdd" element={<AdminCarAdd/>} />
      <Route path="/AdminCarEdit/:id" element={<AdminCarEdit/>} />
    </Routes>
    
  );
}
export default App;