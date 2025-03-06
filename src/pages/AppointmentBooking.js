import React, { useState } from 'react';
import axios from 'axios';

const AppointmentBooking = ({ doctorId }) => {
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    startTime: '',
    endTime: ''
  });

  const handleBooking = async () => {
    try {
      await axios.post('/api/appointments/book', {
        ...appointmentData,
        doctorId
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Appointment booked successfully!');
      // Redirect or update UI
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to book appointment. Please try again.');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <input
        type="date"
        value={appointmentData.date}
        onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
      />
      <input
        type="time"
        value={appointmentData.startTime}
        onChange={(e) => setAppointmentData({...appointmentData, startTime: e.target.value})}
      />
      <input
        type="time"
        value={appointmentData.endTime}
        onChange={(e) => setAppointmentData({...appointmentData, endTime: e.target.value})}
      />
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default AppointmentBooking;