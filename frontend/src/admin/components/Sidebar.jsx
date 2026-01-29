import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, BarChart2 } from 'react-feather';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold text-center">Admin</h2>
      <div className="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                }
              >
                <Home className="w-6 h-6" />
                <span className="mx-4 font-medium">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                }
              >
                <Users className="w-6 h-6" />
                <span className="mx-4 font-medium">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/analytics"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5 rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                }
              >
                <BarChart2 className="w-6 h-6" />
                <span className="mx-4 font-medium">Analytics</span>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
