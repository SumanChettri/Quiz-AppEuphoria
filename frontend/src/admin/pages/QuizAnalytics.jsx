import React, { useState, useEffect } from 'react';

const QuizAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/admin/analytics/quizzes', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setAnalytics(data.data);
        } else {
          setError(data.message || 'Failed to fetch analytics');
        }
      } catch (err) {
        setError('Server error. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Quiz Analytics</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">By Category</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">Category</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">Times Taken</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">Avg. Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analytics?.categories.map((cat) => (
                  <tr key={cat._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{cat._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{cat.count}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{cat.avgScore.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">By Difficulty</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">Difficulty</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">Times Taken</th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">Avg. Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analytics?.difficulties.map((diff) => (
                  <tr key={diff._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{diff._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{diff.count}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{diff.avgScore.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizAnalytics;
