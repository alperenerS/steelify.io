import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkTokenExpiry } from '../Auth/authService';

const PrivateRoute = ({ children }) => {
  const isTokenValid = checkTokenExpiry();

  return isTokenValid ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
