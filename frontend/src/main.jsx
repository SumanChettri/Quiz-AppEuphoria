import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Dynamically determine basename based on current pathname
// This handles different deployment scenarios (root, /quiz-app, /Quiz-AppEuphoria/quiz-app, etc.)
const getBasename = () => {
  const pathname = window.location.pathname;
  
  // Check for the full path first
  if (pathname.startsWith('/Quiz-AppEuphoria/quiz-app')) {
    return '/Quiz-AppEuphoria/quiz-app';
  }
  
  // Check for simple quiz-app path
  if (pathname.startsWith('/quiz-app')) {
    return '/quiz-app';
  }
  
  // Default: no basename (root deployment)
  return '';
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
