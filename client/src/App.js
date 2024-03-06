import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/homePage';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import LandingPage from './Pages/LandingPage/landingPage';
import OrderDetails from './Pages/OrderDetails/orderDetails';
import Navbar from './Pages/Navbar/navbar';
import GetQuotePage from './Pages/GetQuote/getQuotePage';
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import AboutUs from './Pages/AboutUs/aboutUs';

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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/*" element={<PageNotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
