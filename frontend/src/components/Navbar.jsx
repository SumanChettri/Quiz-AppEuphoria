import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = ({ onOpenAuth }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "";

  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200 sticky top-0 z-30">
      <nav className="container py-3 flex items-center justify-between gap-3">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
            aria-label="Go to home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="text-lg font-bold">Q</span>
            </div>
            <div className="text-left">
              <span className="block text-sm font-semibold text-slate-900">Programming Quiz</span>
              <span className="block text-xs text-slate-500">Euphoria Edition</span>
            </div>
          </button>
        </div>

        {/* Center: links */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-2 py-1 rounded-md transition-colors ${
                isActive ? "text-blue-700" : "text-slate-700 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative px-2 py-1 rounded-md transition-colors ${
                isActive ? "text-blue-700" : "text-slate-700 hover:text-slate-900"
              }`
            }
          >
            About
          </NavLink>
          {user && user.role === 'admin' && (
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `relative px-2 py-1 rounded-md transition-colors ${
                  isActive ? "text-blue-700" : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              Admin
            </NavLink>
          )}
        </div>

        {/* Right: auth / CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isHome && (
            <span className="hidden lg:inline-flex text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              New: More categories & smart timer
            </span>
          )}
          {!user ? (
            <>
              <button
                type="button"
                onClick={() => onOpenAuth("login")}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => onOpenAuth("signup")}
                className="text-sm font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign up free
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-500">Signed in as</p>
                <p className="text-sm font-semibold text-slate-800 truncate max-w-[140px]">
                  {user.name}
                </p>
              </div>
              <button
                type="button"
                onClick={logout}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log out
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="container px-4 py-3 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium px-2 py-1 rounded-md ${
                  isActive ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium px-2 py-1 rounded-md ${
                  isActive ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              About
            </NavLink>
            {user && user.role === 'admin' && (
              <NavLink
                to="/admin/dashboard"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium px-2 py-1 rounded-md ${
                    isActive ? "text-blue-700 bg-blue-50" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                Admin
              </NavLink>
            )}
            <div className="h-px bg-slate-200 my-2" />
            {!user ? (
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onOpenAuth("login");
                    setMenuOpen(false);
                  }}
                  className="text-sm font-semibold text-slate-700 px-2 py-1.5 rounded-md hover:bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Log in
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onOpenAuth("signup");
                    setMenuOpen(false);
                  }}
                  className="text-sm font-semibold px-3 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign up free
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-sm font-semibold text-slate-700 px-2 py-1.5 rounded-md hover:bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

