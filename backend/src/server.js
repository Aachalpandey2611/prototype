require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
  : [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://campuschain.vercel.app",
      "https://prototype-jade-alpha.vercel.app",
    ];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/wallet", require("./routes/wallet"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/notifications", require("./routes/notifications"));
app.use("/api/recurring", require("./routes/recurring"));
app.use("/api/insights", require("./routes/insights"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", version: "1.0.0", service: "CampusChain API" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

const PORT = process.env.PORT || 3001;

// Only start the server if this file is run directly (useful for local / Render), otherwise export for serverless (Vercel)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 CampusChain API running on http://localhost:${PORT}`);
    console.log(`📦 Environment: ${process.env.NODE_ENV}`);
  });
}

module.exports = app;
