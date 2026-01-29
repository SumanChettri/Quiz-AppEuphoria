import mongoose from 'mongoose';

// Ensure query filters behave consistently across environments
mongoose.set('strictQuery', true);

let isShuttingDown = false;

/**
 * Connect to MongoDB database
 * Supports both local MongoDB and MongoDB Atlas (cloud)
 */
export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://Quiz_Db:helloCampa@react-quiz.26t1mol.mongodb.net/?appName=React-Quiz';

    // Use default driver options for Mongoose v6+/MongoDB Driver v4+
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB connected (${conn.connection.host}/${conn.connection.name})`);

    // Connection event handlers
    mongoose.connection.on('error', (err) => {
      if (isShuttingDown) return; // suppress noise during graceful shutdown
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      if (isShuttingDown) return; // avoid logging on intentional shutdowns
      console.warn('MongoDB disconnected unexpectedly');
    });

    // Graceful shutdown handlers
    const gracefulClose = async (signal) => {
      if (isShuttingDown) return; // prevent double-execution
      isShuttingDown = true;
      try {
        await mongoose.connection.close();
        console.log(`MongoDB connection closed (${signal})`);
      } catch (err) {
        console.error('Error during MongoDB shutdown:', err);
      } finally {
        process.exit(0);
      }
    };

    // Handle typical termination signals
    process.once('SIGINT', () => gracefulClose('SIGINT'));
    process.once('SIGTERM', () => gracefulClose('SIGTERM'));

    // Nodemon restarts send SIGUSR2; close cleanly then re-send signal so nodemon can restart
    process.once('SIGUSR2', async () => {
      isShuttingDown = true;
      try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed (SIGUSR2 - nodemon restart)');
      } catch (err) {
        console.error('Error during MongoDB shutdown (SIGUSR2):', err);
      } finally {
        process.kill(process.pid, 'SIGUSR2');
      }
    });

    return conn;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

/**
 * Get MongoDB connection status
 */
export const getDBStatus = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  return {
    state: states[mongoose.connection.readyState] || 'unknown',
    readyState: mongoose.connection.readyState,
    host: mongoose.connection.host,
    name: mongoose.connection.name,
  };
};

export default connectDB;
