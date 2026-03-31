import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

// Static demo credentials
const DEMO_CREDENTIALS = [
  { email: "admin@campus.edu",   password: "admin123",   role: "admin",   label: "Admin",   icon: "admin_panel_settings", color: "text-primary"   },
  { email: "student@campus.edu", password: "student123", role: "student", label: "Student", icon: "school",               color: "text-secondary" },
];

const Login = () => {
  const { mockLogin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const doLogin = (type) => {
    setLoading(true);
    setTimeout(() => {
      mockLogin(type);
      window.location.href = type === "admin" ? "/admin" : "/dashboard";
    }, 600);
  };

  // Allow typing the demo credentials in the form too
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const match = DEMO_CREDENTIALS.find(
      (c) => c.email === form.email && c.password === form.password
    );
    if (match) {
      doLogin(match.role);
    } else {
      setError("Invalid credentials. Use the demo accounts shown below.");
    }
  };

  return (
    <div className="min-h-screen flex bg-surface-low">
      {/* Left — Branding Panel */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex flex-col justify-between w-[55%] bg-navy-gradient p-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(78,95,125,0.3),transparent_60%)]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
              <span className="material-icons text-white text-xl">link</span>
            </div>
            <span className="font-headline font-bold text-white text-xl">CampusChain</span>
          </div>
          <h2 className="font-headline font-bold text-white text-3xl leading-tight mb-4">
            FT-01: CampusChain
          </h2>
          <div className="text-white/70 font-body text-sm leading-relaxed max-w-lg space-y-4 pr-4 max-h-[35vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wide text-xs">Problem Statement</p>
              <p>Design a blockchain-based financial ecosystem tailored for educational institutions, enabling seamless and secure digital transactions within a campus environment.</p>
            </div>
            
            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wide text-xs">The system supports:</p>
              <ul className="list-disc pl-4 space-y-1 text-white/60">
                <li>A campus-specific digital currency or token system</li>
                <li>Secure transactions for fees, events, services, and peer-to-peer payments</li>
                <li>Smart contract-based automation for payments</li>
                <li>Administrative controls for managing users, permissions, and transaction policies</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-wide text-xs">🔹 Features</p>
                <ul className="list-disc pl-4 space-y-1 text-white/60 text-xs">
                  <li>Campus-specific digital wallet</li>
                  <li>Peer-to-peer payments</li>
                  <li>Fee & service payments</li>
                  <li>Blockchain-backed records</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-bold mb-1 uppercase tracking-wide text-xs">🏗 System Design</p>
                <ul className="list-disc pl-4 space-y-1 text-white/60 text-xs">
                  <li>Frontend (User Interface)</li>
                  <li>Backend (API + Logic)</li>
                  <li>Database (Transactions)</li>
                  <li>Blockchain Layer (Security)</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-white font-bold mb-1 uppercase tracking-wide text-xs">🔄 Workflow</p>
              <p className="text-white/80 font-mono text-xs bg-white/5 p-2 rounded-lg break-words">
                User → Wallet → Transaction → Blockchain → Record → Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Demo info panel on left side */}
        <div className="relative z-10 space-y-4">
          <p className="text-white/40 text-xs uppercase tracking-widest font-body mb-3">Demo Prototype — Static Mode</p>
          {DEMO_CREDENTIALS.map((c) => (
            <div key={c.role} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-icons text-white/70 text-base">{c.icon}</span>
                <span className="text-white/80 font-headline font-semibold text-sm">{c.label} Account</span>
              </div>
              <p className="text-white/50 text-xs font-mono">Email: {c.email}</p>
              <p className="text-white/50 text-xs font-mono">Password: {c.password}</p>
            </div>
          ))}
          <div className="flex items-center gap-6 pt-2">
            {["Enterprise Grade Security", "Blockchain Verified", "v4.2.0"].map((tag) => (
              <span key={tag} className="text-white/50 text-xs font-body font-medium">• {tag}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right — Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="flex-1 flex items-center justify-center p-8"
      >
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-xl bg-primary-gradient flex items-center justify-center">
              <span className="material-icons text-white text-base">link</span>
            </div>
            <span className="font-headline font-bold text-navy">CampusChain</span>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-body mb-2">Vault Access</p>
            <h1 className="font-headline font-bold text-3xl text-on-surface">Welcome back</h1>
            <p className="text-on-surface-variant font-body mt-2">Sign in with your credentials or use a quick demo account.</p>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="mb-4 p-3 rounded-xl bg-error/10 text-error text-sm font-body">
              {error}
            </motion.div>
          )}

          {/* Email / Password form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-body font-medium text-on-surface-variant mb-2 uppercase tracking-wide">Email</label>
              <input type="email" value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="input-field" placeholder="admin@campus.edu" id="login-email" required />
            </div>
            <div>
              <label className="block text-xs font-body font-medium text-on-surface-variant mb-2 uppercase tracking-wide">Password</label>
              <input type="password" value={form.password}
                onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                className="input-field" placeholder="••••••••" id="login-password" required />
            </div>
            <button type="submit" disabled={loading} id="login-submit"
              className="btn-primary w-full mt-2 flex items-center justify-center gap-2">
              {loading && <span className="material-icons animate-spin text-base">sync</span>}
              {loading ? "Signing in..." : "Access Vault"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-surface-container" />
            <span className="text-xs text-on-surface-variant font-body">or use a demo account</span>
            <div className="flex-1 h-px bg-surface-container" />
          </div>

          {/* Quick login buttons */}
          <div className="grid grid-cols-2 gap-3">
            {DEMO_CREDENTIALS.map((c) => (
              <motion.button
                key={c.role}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => doLogin(c.role)}
                disabled={loading}
                className="card p-4 text-left hover:shadow-float transition-all duration-300 disabled:opacity-50 border border-surface-container hover:border-primary/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`material-icons text-xl ${c.color}`}>{c.icon}</span>
                  <span className="font-headline font-semibold text-on-surface text-sm">{c.label} Login</span>
                </div>
                <p className="text-xs text-on-surface-variant font-mono truncate">{c.email}</p>
                <p className="text-xs text-on-surface-variant/60 font-body mt-1">
                  {c.role === "admin" ? "Full admin access" : "Student portal"}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Mobile demo credentials hint */}
          <div className="lg:hidden mt-6 p-4 rounded-xl bg-surface-container space-y-2">
            <p className="text-xs text-on-surface-variant font-body font-semibold uppercase tracking-wide">Demo Credentials</p>
            {DEMO_CREDENTIALS.map((c) => (
              <div key={c.role} className="flex justify-between text-xs font-mono text-on-surface-variant">
                <span>{c.email}</span>
                <span>{c.password}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6 justify-center">
            {["System Status", "Privacy Policy", "Compliance"].map((link) => (
              <button key={link} className="text-xs text-on-surface-variant hover:text-on-surface font-body transition-colors">{link}</button>
            ))}
          </div>
          <p className="text-center text-xs text-on-surface-variant mt-4 font-body">
            © 2024 CampusChain Institutional Services
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
