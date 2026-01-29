# Backend Setup Guide

## Quick Start

### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

### 2. Set Up MongoDB

**Option A: Local MongoDB**
- Install MongoDB on your system
- Start MongoDB service: `mongod`
- Use connection string: `mongodb://localhost:27017/quiz-app`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Use the connection string in `.env` file

### 3. Configure Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quiz-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Important:** Change `JWT_SECRET` to a strong random string in production!

### 4. Start the Backend Server

```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

### 5. Configure Frontend

Create a `.env` file in the root directory (same level as `package.json`):

```env
VITE_API_URL=http://localhost:5000/api
```

### 6. Start Frontend

```bash
# From root directory
npm run dev
```

## Testing the API

### Using curl or Postman

**Signup:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

**Get Current User (requires token):**
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running
- Check your connection string in `.env`
- For Atlas, ensure your IP is whitelisted

### CORS Errors
- Update `FRONTEND_URL` in backend `.env` to match your frontend URL
- Check that frontend is making requests to correct API URL

### Port Already in Use
- Change `PORT` in backend `.env` to a different port (e.g., 5001)
- Update `VITE_API_URL` in frontend `.env` accordingly

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use a strong `JWT_SECRET`
3. Use MongoDB Atlas or a managed MongoDB service
4. Update CORS settings for your production domain
5. Use environment variables for all sensitive data
