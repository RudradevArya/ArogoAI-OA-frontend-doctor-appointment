import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './pages/Auth';
import DoctorSearch from './pages/DoctorSearch';
import AppointmentBooking from './pages/AppointmentBooking';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/register" component={Auth} />
          <Route path="/search" component={DoctorSearch} />
          <Route path="/book/:doctorId" component={AppointmentBooking} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={DoctorSearch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;