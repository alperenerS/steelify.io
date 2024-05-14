import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { checkTokenExpiry } from '../Auth/authService';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isTokenValid = checkTokenExpiry();

  if (isTokenValid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
