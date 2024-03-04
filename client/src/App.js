import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homePage';
import Login from './login';
import Register from './register';
import LandingPage from './LandingPage/LandingPage';
import OrderDetails from './orderDetails';
import Navbar from './Navbar/navbar';
import GetQuotePage from './GetQuote/getQuotePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-quote" element={<GetQuotePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
