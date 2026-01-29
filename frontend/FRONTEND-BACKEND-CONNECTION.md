# Frontend-Backend Connection Guide

## ✅ Current Setup Status

The frontend is **already configured** to connect to MongoDB and Node.js backend! Here's what's in place:

### 🔗 Connection Files

1. **`src/utils/api.js`** - API utility that handles all backend requests
   - Automatically adds JWT tokens to requests
   - Handles errors and network issues
   - Supports both local and production backends

2. **`src/contexts/AuthContext.jsx`** - Authentication context
   - Connects to backend for login/signup
   - Stores JWT tokens securely
   - Manages user session state
   - Validates user input before sending to backend

3. **`src/components/AuthModal.jsx`** - Login/Signup modal
   - Sends data to backend API
   - Shows success/error messages
   - Handles form validation

## 🚀 Quick Start

### Step 1: Configure Backend URL

Create a `.env` file in the **root directory** (same level as `package.json`):

```env
VITE_API_URL=http://localhost:5000/api
```

**For Production:**
```env
VITE_API_URL=https://your-backend-domain.com/api
```

### Step 2: Start Backend Server

```bash
cd backend
npm run dev
```

Backend should be running on `http://localhost:5000`

### Step 3: Start Frontend

```bash
# From root directory
npm run dev
```

Frontend will connect to backend automatically!

## 📡 How It Works

### Authentication Flow

1. **User clicks "Sign up" or "Log in"** in Navbar
2. **AuthModal opens** with form
3. **User enters credentials** (name, email, password)
4. **Frontend validates** input (email format, password length, etc.)
5. **API request sent** to backend:
   - Signup: `POST /api/auth/signup`
   - Login: `POST /api/auth/login`
6. **Backend processes** request:
   - Validates data
   - Checks MongoDB for existing user
   - Hashes password (signup) or verifies password (login)
   - Creates/retrieves user from MongoDB
   - Generates JWT token
7. **Frontend receives** response:
   - Stores JWT token in localStorage
   - Updates user state
   - Shows success message
   - Closes modal

### Data Storage

- **MongoDB**: Stores user accounts, passwords (hashed), quiz history
- **localStorage**: Stores JWT token for authentication
- **React Context**: Stores current user state in memory

## 🔍 Testing the Connection

### Test Backend Connection

Open browser console and run:

```javascript
// Test if backend is running
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

### Test Authentication

1. Click "Sign up" in navbar
2. Enter:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
3. Click "Create account"
4. Check browser console for any errors
5. Check MongoDB to see if user was created

## 🐛 Troubleshooting

### "Cannot connect to server"

**Problem:** Frontend can't reach backend

**Solutions:**
1. Make sure backend is running: `cd backend && npm run dev`
2. Check backend URL in `.env` file matches backend port
3. Check CORS settings in `backend/server.js`
4. Check if MongoDB is running

### "Invalid email or password"

**Problem:** Login fails even with correct credentials

**Solutions:**
1. Make sure user exists in MongoDB (try signup first)
2. Check password is correct (case-sensitive)
3. Check backend logs for errors
4. Verify MongoDB connection in backend

### "Session expired"

**Problem:** Token is invalid or expired

**Solutions:**
1. Log out and log back in
2. Clear localStorage: `localStorage.removeItem('quiz-app-token')`
3. Check JWT_SECRET in backend `.env` matches

### CORS Errors

**Problem:** Browser blocks requests due to CORS

**Solutions:**
1. Update `FRONTEND_URL` in backend `.env`:
   ```env
   FRONTEND_URL=http://localhost:5173
   ```
2. Restart backend server
3. Clear browser cache

## 📝 API Endpoints Used

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|---------------|
| `/api/auth/signup` | POST | Create new account | No |
| `/api/auth/login` | POST | Login user | No |
| `/api/auth/me` | GET | Get current user | Yes |
| `/api/auth/quiz-result` | POST | Save quiz result | Yes |
| `/api/health` | GET | Check server status | No |

## 🔐 Security Features

✅ Passwords are hashed with bcryptjs (never stored in plain text)
✅ JWT tokens expire after 7 days
✅ Tokens stored in localStorage (not cookies)
✅ CORS protection enabled
✅ Input validation on both frontend and backend
✅ Email format validation
✅ Password length requirements (minimum 6 characters)

## 🎯 Next Steps

1. ✅ Backend is set up
2. ✅ Frontend is connected
3. ✅ Authentication works
4. 🔄 Test signup/login flow
5. 🔄 Test saving quiz results
6. 🔄 Deploy to production (update API URLs)

## 📚 Files Reference

- **Backend API**: `backend/routes/auth.js`
- **Frontend API Utility**: `src/utils/api.js`
- **Auth Context**: `src/contexts/AuthContext.jsx`
- **Auth Modal**: `src/components/AuthModal.jsx`
- **Database Config**: `backend/config/database.js`

Everything is ready! Just start both servers and test the authentication flow.
