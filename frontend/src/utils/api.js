const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('quiz-app-token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Handle non-JSON responses
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      throw new Error(text || 'Request failed');
    }

    if (!response.ok) {
      // Handle different error status codes
      if (response.status === 401) {
        // Unauthorized - clear token
        localStorage.removeItem('quiz-app-token');
        throw new Error(data.message || 'Session expired. Please login again.');
      } else if (response.status === 403) {
        throw new Error(data.message || 'Access forbidden');
      } else if (response.status === 404) {
        throw new Error(data.message || 'Resource not found');
      } else if (response.status >= 500) {
        throw new Error(data.message || 'Server error. Please try again later.');
      } else {
        throw new Error(data.message || 'Request failed');
      }
    }

    return data;
  } catch (error) {
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Cannot connect to server. Please check if the backend is running.');
    }
    throw error;
  }
};

// Test backend connection
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/api/health`);
    const data = await response.json();
    return { connected: true, data };
  } catch (error) {
    return { connected: false, error: error.message };
  }
};

// Auth API functions
export const authAPI = {
  signup: async (userData) => {
    return apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login: async (credentials) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  getCurrentUser: async () => {
    return apiRequest('/auth/me');
  },

  saveQuizResult: async (quizData) => {
    return apiRequest('/auth/quiz-result', {
      method: 'POST',
      body: JSON.stringify(quizData),
    });
  },
};

export default apiRequest;
