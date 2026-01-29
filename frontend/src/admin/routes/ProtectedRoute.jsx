import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // You might want to add token validation here to check if it's expired

  return <Outlet />;
};

export default ProtectedRoute;
