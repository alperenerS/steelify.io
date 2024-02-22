import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import HomePage from './homePage';
import Login from './login';
import Register from './register';
import LandingPage from './LandingPage/LandingPage';
import OrderDetails from './orderDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-details" element={<OrderDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
