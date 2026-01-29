import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminLogin from '../pages/AdminLogin';
import AdminLayout from '../components/AdminLayout';
import Dashboard from '../pages/Dashboard';
import UserManagement from '../pages/UserManagement';
import QuizAnalytics from '../pages/QuizAnalytics';
import ProtectedRoute from './ProtectedRoute';
import UploadQuestions from '../pages/UploadQuestions';

const AdminRoutes = () => {
  const hasToken = !!localStorage.getItem('adminToken');

  return (
    <Routes>
      {/* Index route for /admin base path */}
      <Route index element={<Navigate to={hasToken ? 'dashboard' : 'login'} replace />} />
      <Route path="login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}> 
        <Route element={<AdminLayout />}> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="analytics" element={<QuizAnalytics />} />
          <Route path="upload" element={<UploadQuestions />} />
          {/* Fallback inside protected area */}
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Route>
      {/* Global fallback for unknown admin routes */}
      <Route path="*" element={<Navigate to={hasToken ? 'dashboard' : 'login'} replace />} />
    </Routes>
  );
};

export default AdminRoutes;
