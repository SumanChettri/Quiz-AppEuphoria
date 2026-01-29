import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/AdminLogin';
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../pages/Dashboard';
import UserManagement from '../pages/UserManagement';
import QuizAnalytics from '../pages/QuizAnalytics';
import ProtectedRoute from './ProtectedRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="analytics" element={<QuizAnalytics />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
