import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import LandingPage from './Pages/LandingPage/landingPage';
import RequestDetailsPage from './Pages/RequestDetails/requestDetailsPage';
import Navbar from './Pages/Navbar/navbar';
import GetQuotePage from './Pages/GetQuote/getQuotePage';
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import AboutUs from './Pages/AboutUs/aboutUs';
import MyRequests from './Pages/MyRequests/myRequests';
import Profile from './Pages/Profile/profile';
import PrivateRoute from './Utils/PrivateRoute/privateRoute';
import Footer from './Shared/Footer/appFooter';
import ResetPassword from './Pages/ResetPasword/resetPassword';
import ForgotPassword from './Pages/ForgotPassword/forgotPassword';
import Chat from './Shared/Chat/chat';
import './App.css';
import { CookieConsent } from './Shared/Cookie/cookie';

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
            <Route path="/request-details/:order_id" element={<PrivateRoute><RequestDetailsPage /></PrivateRoute>} />
            <Route path="/get-quote" element={<PrivateRoute><GetQuotePage /></PrivateRoute>} />
            <Route path="/get-quote/:order_id" element={<PrivateRoute><GetQuotePage /></PrivateRoute>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/my-requests" element={<PrivateRoute><MyRequests /></PrivateRoute>} />
            <Route path="/my-profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout.Content>
        {/* <Chat /> */}
        {/* <CookieConsent /> */}
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
