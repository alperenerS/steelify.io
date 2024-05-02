import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import LandingPage from './Pages/LandingPage/landingPage';
import RequestDetails from './Pages/RequestDetails/requestDetails';
import Navbar from './Pages/Navbar/navbar';
import GetQuotePage from './Pages/GetQuote/getQuotePage';
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import AboutUs from './Pages/AboutUs/aboutUs';
import MyRequests from './Pages/MyRequests/myRequests';
import Profile from './Pages/Profile/profile';
import PrivateRoute from './Utils/PrivateRoute/privateRoute';
import AppFooter from './Pages/Footer/footer';
import ActivationNotification from './Pages/ActivationNotification/activationNotification';
import ResetPassword from './Pages/ResetPasword/resetPassword';
import ForgotPassword from './Pages/ForgotPassword/forgotPassword';
import './App.css';

function App() {
  return (
    <Router>
      <Layout className="site-layout">
        <Navbar />
        <Layout.Content className="site-layout-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/request-details/:order_id" element={<PrivateRoute><RequestDetails /></PrivateRoute>} />
            <Route path="/get-quote" element={<PrivateRoute><GetQuotePage /></PrivateRoute>} />
            <Route path="/get-quote/:order_id" element={<PrivateRoute><GetQuotePage /></PrivateRoute>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/my-requests" element={<PrivateRoute><MyRequests /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/reset-password" element={<PrivateRoute><ResetPassword /></PrivateRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* <Route path="/activation-notification" element={<ActivationNotification />} /> */}
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout.Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
