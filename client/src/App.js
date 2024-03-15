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
import MyOrders from './Pages/MyOrders/myOrders';
import PrivateRoute from './Utils/PrivateRoute/privateRoute';

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
          <Route path="/order-details" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
          <Route path="/get-quote" element={<PrivateRoute><GetQuotePage /></PrivateRoute>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/my-orders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
