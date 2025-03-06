import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Auth from './pages/Auth';
import DoctorSearch from './pages/DoctorSearch';
// import AppointmentBooking from './pages/AppointmentBooking';
// import Dashboard from './pages/Dashboard';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<DoctorSearch />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;