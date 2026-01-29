import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import AdminRoutes from "./admin/routes/AdminRoutes";

const App = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleOpenAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthOpen(false);
  };

  return (
    <>
      {/* Navbar should always render */}
      <Navbar onOpenAuth={handleOpenAuth} />
      <Routes>
        {/* Default index route for base path */}
        <Route index element={<Home />} />
        {/* Explicit root route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        {/* Fallback for any unmatched route to avoid blank page */}
        <Route path="*" element={<Home />} />
      </Routes>
      <AuthModal open={authOpen} mode={authMode} onClose={handleCloseAuth} />
    </>
  );
};

export default App;

