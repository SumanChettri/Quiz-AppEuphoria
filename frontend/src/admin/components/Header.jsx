import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'react-feather';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-700">Admin Dashboard</h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleLogout}
          className="flex items-center text-gray-600 hover:text-indigo-600 focus:outline-none"
        >
          <LogOut className="w-5 h-5" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
