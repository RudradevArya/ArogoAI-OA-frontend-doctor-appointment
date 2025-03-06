import React, { useState } from 'react';
import axios from 'axios';

const DoctorSearch = () => {
  const [searchParams, setSearchParams] = useState({ specialty: '', location: '' });
  const [doctors, setDoctors] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/doctors/search', { params: searchParams });
      setDoctors(response.data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div>
      <h2>Find a Doctor</h2>
      <input
        type="text"
        placeholder="Specialty"
        value={searchParams.specialty}
        onChange={(e) => setSearchParams({...searchParams, specialty: e.target.value})}
      />
      <input
        type="text"
        placeholder="Location"
        value={searchParams.location}
        onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {doctors.map(doctor => (
          <div key={doctor._id}>
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Location: {doctor.location}</p>
            {/* Add a link to doctor's profile/booking page */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;