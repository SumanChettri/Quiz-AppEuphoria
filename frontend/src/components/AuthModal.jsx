import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const AuthModal = ({ open, mode, onClose }) => {
  const { login, signup } = useAuth();
  const [activeTab, setActiveTab] = useState(mode || "login");

  // Sync activeTab with mode prop when modal opens
  useEffect(() => {
    if (open && mode) {
      setActiveTab(mode);
    }
  }, [open, mode]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      // Client-side validation
      if (!form.email || !form.password) {
        setError("Email and password are required.");
        setSubmitting(false);
        return;
      }

      if (activeTab === "signup" && !form.name.trim()) {
        setError("Please enter your name for sign up.");
        setSubmitting(false);
        return;
      }

      // Call the authentication function (handles validation and API call)
      const action = activeTab === "login" ? login : signup;
      const res = await action(form);

      if (res.ok) {
        setSuccess(
          activeTab === "login"
            ? "Welcome back! You're logged in."
            : "Account created successfully! You're now logged in."
        );
        // Redirect admins to admin dashboard
        if (res.user?.role === 'admin') {
          window.location.href = '/admin/dashboard';
          return;
        }
        // Reset form
        setForm({ name: "", email: "", password: "" });
        setTimeout(() => {
          setSubmitting(false);
          onClose();
        }, 800);
      } else {
        setError(res.message || "Something went wrong. Please try again.");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Auth error:", error);
      setError(error.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  const toggleTab = (next) => {
    setActiveTab(next);
    setError("");
    setSuccess("");
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="px-6 pt-5 pb-3 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {activeTab === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-xs text-slate-500">
              Save your progress and track your improvement over time.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-500"
          >
            <span className="sr-only">Close</span>
            ×
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-3 flex gap-2 text-sm font-medium">
          <button
            type="button"
            onClick={() => toggleTab("login")}
            className={`flex-1 py-2 rounded-lg border ${
              activeTab === "login"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-transparent text-slate-500 hover:bg-slate-50"
            }`}
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => toggleTab("signup")}
            className={`flex-1 py-2 rounded-lg border ${
              activeTab === "signup"
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-transparent text-slate-500 hover:bg-slate-50"
            }`}
          >
            Sign up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-5 pt-3 space-y-3">
          {activeTab === "signup" && (
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your display name"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="At least 6 characters"
              required
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-xs text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>
            <span className="text-xs text-blue-600 hover:underline cursor-default">
              Forgot password?
            </span>
          </div>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          {success && (
            <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitting ? "Please wait..." : activeTab === "login" ? "Log in" : "Create account"}
          </button>

          <p className="text-[11px] text-slate-400 text-center mt-1">
            Your account is securely stored in our database. Sign up to track your quiz progress!
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

