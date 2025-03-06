import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent } from '@mui/material';
import api from '../services/api';

const DoctorSearch = () => {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [doctors, setDoctors] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await api.get(`/doctors/search?specialty=${specialty}&location=${location}`);
      setDoctors(response.data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Search Doctors</Typography>
      <TextField
        label="Specialty"
        fullWidth
        margin="normal"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <TextField
        label="Location"
        fullWidth
        margin="normal"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
      {doctors.map((doctor) => (
        <Card key={doctor._id} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">{doctor.user.name}</Typography>
            <Typography>Specialty: {doctor.specialty}</Typography>
            <Typography>Location: {doctor.location}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DoctorSearch;