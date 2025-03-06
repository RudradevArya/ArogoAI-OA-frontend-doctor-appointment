// src/pages/Home.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Welcome to Doctor Appointment System</Typography>
      <Button variant="contained" component={Link} to="/search">Search Doctors</Button>
    </div>
  );
};

export default Home;

