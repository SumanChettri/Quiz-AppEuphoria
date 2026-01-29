import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import { connectDB, getDBStatus } from './config/database.js';

// Load environment variables
dotenv.config();

const app = express();
const ENV = process.env.NODE_ENV || 'development';
const PORT = Number(process.env.PORT) || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  const dbStatus = getDBStatus();
  res.json({
    status: 'OK',
    message: 'Quiz App Backend is running',
    database: dbStatus,
    env: ENV,
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handling middleware
// Keep the error output minimal in production
// Attach a correlation id for easier tracing in logs
app.use((err, req, res, next) => {
  const correlationId = req.headers['x-correlation-id'] || Date.now().toString(36);
  const statusCode = err.status || 500;
  const payload = {
    success: false,
    message: ENV === 'production' ? 'Internal server error' : err.message || 'Internal server error',
    ...(ENV !== 'production' && err.stack ? { stack: err.stack } : {}),
    correlationId,
  };

  // Professional log formatting
  console.error(
    `[${new Date().toISOString()}] ERROR ${statusCode} (${correlationId}) -`,
    err.message,
  );

  res.status(statusCode).json(payload);
});

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      const base = `http://localhost:${PORT}`;
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      console.log(`✅ Server listening on ${base}`);
      console.log(`📡 API base: ${base}/api`);
      console.log(`🌍 Environment: ${ENV}`);
      console.log(`🔗 Allowed CORS origin: ${FRONTEND_URL}`);
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();

export default app;
