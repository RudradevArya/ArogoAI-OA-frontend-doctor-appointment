import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import DoctorSearch from './pages/DoctorSearch';
import AppointmentBooking from './pages/AppointmentBooking';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/search" element={<DoctorSearch />} />
          <Route path="/book/:doctorId" element={<AppointmentBooking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<DoctorSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;