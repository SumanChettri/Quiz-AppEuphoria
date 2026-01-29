/**
 * MongoDB Connection Configuration Examples
 * 
 * Copy this file to understand different MongoDB connection options
 */

// ============================================
// OPTION 1: Local MongoDB
// ============================================
// MONGODB_URI=mongodb://localhost:27017/quiz-app

// ============================================
// OPTION 2: MongoDB Atlas (Cloud) - Recommended
// ============================================
// MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/quiz-app?retryWrites=true&w=majority

// Steps to get MongoDB Atlas connection string:
// 1. Go to https://www.mongodb.com/cloud/atlas
// 2. Create a free account
// 3. Create a new cluster (free tier available)
// 4. Click "Connect" on your cluster
// 5. Choose "Connect your application"
// 6. Copy the connection string
// 7. Replace <username> and <password> with your database user credentials
// 8. Replace <dbname> with your database name (e.g., quiz-app)

// ============================================
// OPTION 3: MongoDB Atlas with specific database
// ============================================
// MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/quiz-app?retryWrites=true&w=majority&appName=QuizApp

// ============================================
// OPTION 4: MongoDB with authentication
// ============================================
// MONGODB_URI=mongodb://username:password@localhost:27017/quiz-app?authSource=admin

// ============================================
// Environment Variables (.env file)
// ============================================
/*
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/quiz-app?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
*/

// ============================================
// MongoDB Atlas Setup Checklist:
// ============================================
// ✅ Create MongoDB Atlas account
// ✅ Create a new cluster (free M0 tier)
// ✅ Create database user (Database Access)
// ✅ Whitelist your IP address (Network Access)
// ✅ Get connection string
// ✅ Update .env file with connection string
// ✅ Test connection
