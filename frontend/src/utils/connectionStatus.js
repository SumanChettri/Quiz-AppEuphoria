import { testConnection } from './api';

/**
 * Check if backend server is connected
 * Useful for displaying connection status to users
 */
export const checkBackendConnection = async () => {
  try {
    const result = await testConnection();
    return result;
  } catch (error) {
    return {
      connected: false,
      error: error.message || 'Connection check failed'
    };
  }
};

/**
 * Get API base URL (for debugging)
 */
export const getApiUrl = () => {
  return import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
};
