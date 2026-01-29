import React, { useState, useEffect } from 'react';
import { Users, HelpCircle, BarChart, Activity } from 'react-feather';
import apiRequest from '../../utils/api';

const StatCard = ({ icon, label, value, color }) => (
  <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4 animate-fade-in-up">
    <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const adminToken = localStorage.getItem('adminToken');
        const data = await apiRequest('/admin/stats', {
          headers: {
            Authorization: adminToken ? `Bearer ${adminToken}` : undefined,
          },
        });
        if (data?.success) {
          setStats(data.data);
        } else {
          setError(data?.message || 'Failed to fetch stats');
        }
      } catch (err) {
        setError(err.message || 'Server error. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats?.overview && (
          <>
            <StatCard icon={<Users />} label="Total Users" value={stats.overview.totalUsers} color="indigo" />
            <StatCard icon={<HelpCircle />} label="Total Quizzes" value={stats.overview.totalQuizzes} color="green" />
            <StatCard icon={<BarChart />} label="Average Score" value={`${stats.overview.averageScore}%`} color="yellow" />
            <StatCard icon={<Activity />} label="Recent Users" value={stats.recentActivity.newUsers} color="pink" />
          </>
        )}
      </div>
      {/* Add more charts and graphs here */}
    </div>
  );
};

export default Dashboard;
