import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchAppointments();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/users/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('/api/appointments/my-appointments', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <h3>Welcome, {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
      <h3>Your Appointments</h3>
      {appointments.map(appointment => (
        <div key={appointment._id}>
          <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
          <p>Time: {appointment.startTime} - {appointment.endTime}</p>
          {/* Add more appointment details */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;