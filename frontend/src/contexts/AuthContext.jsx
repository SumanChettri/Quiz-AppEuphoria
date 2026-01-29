import { createContext, useContext, useEffect, useState } from "react";
import { authAPI } from "../utils/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing token and fetch user on mount
  useEffect(() => {
    const token = localStorage.getItem("quiz-app-token");
    if (token) {
      fetchCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const response = await authAPI.getCurrentUser();
      if (response.success) {
        setUser(response.data.user);
      } else {
        // Token might be invalid, clear it
        localStorage.removeItem("quiz-app-token");
        localStorage.removeItem("adminToken");
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("quiz-app-token");
      localStorage.removeItem("adminToken");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    try {
      // Validate input
      if (!email || !password) {
        return { 
          ok: false, 
          message: "Email and password are required" 
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { 
          ok: false, 
          message: "Please enter a valid email address" 
        };
      }

      // Validate password length
      if (password.length < 6) {
        return { 
          ok: false, 
          message: "Password must be at least 6 characters" 
        };
      }

      const response = await authAPI.login({ email, password });
      
      if (response.success) {
        const { user: loggedInUser, token } = response.data;
        // Store token
        localStorage.setItem("quiz-app-token", token);
        // If admin, also set adminToken so admin routes work
        if (loggedInUser?.role === 'admin') {
          localStorage.setItem('adminToken', token);
        } else {
          localStorage.removeItem('adminToken');
        }
        // Set user
        setUser(loggedInUser);
        return { ok: true, user: loggedInUser };
      } else {
        return { ok: false, message: response.message || "Login failed" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { 
        ok: false, 
        message: error.message || "Login failed. Please check your connection and try again." 
      };
    }
  };

  const signup = async ({ name, email, password }) => {
    try {
      // Validate input
      if (!name || !email || !password) {
        return { 
          ok: false, 
          message: "Name, email, and password are required" 
        };
      }

      // Validate name
      if (name.trim().length < 2) {
        return { 
          ok: false, 
          message: "Name must be at least 2 characters" 
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { 
          ok: false, 
          message: "Please enter a valid email address" 
        };
      }

      // Validate password length
      if (password.length < 6) {
        return { 
          ok: false, 
          message: "Password must be at least 6 characters" 
        };
      }

      const response = await authAPI.signup({ 
        name: name.trim(), 
        email: email.toLowerCase().trim(), 
        password 
      });
      
      if (response.success) {
        // Store token
        localStorage.setItem("quiz-app-token", response.data.token);
        // New signups are regular users by default
        localStorage.removeItem('adminToken');
        // Set user
        setUser(response.data.user);
        return { ok: true, user: response.data.user };
      } else {
        return { ok: false, message: response.message || "Signup failed" };
      }
    } catch (error) {
      console.error("Signup error:", error);
      return { 
        ok: false, 
        message: error.message || "Signup failed. Please check your connection and try again." 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("quiz-app-token");
    localStorage.removeItem('adminToken');
  };

  const saveQuizResult = async (quizData) => {
    try {
      const response = await authAPI.saveQuizResult(quizData);
      if (response.success && response.data.quizHistory) {
        // Update user with new quiz history
        setUser(prev => ({
          ...prev,
          quizHistory: response.data.quizHistory
        }));
      }
      return response;
    } catch (error) {
      console.error("Error saving quiz result:", error);
      return { success: false, message: error.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        saveQuizResult,
        refreshUser: fetchCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

