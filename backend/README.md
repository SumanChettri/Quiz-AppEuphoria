# Quiz App Backend API

Backend server for the Programming Quiz App with MongoDB authentication.

## Features

- User authentication (Signup/Login)
- JWT token-based authentication
- MongoDB database integration
- Quiz history tracking
- RESTful API endpoints

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/quiz-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# If MongoDB is installed locally
mongod

# Or use MongoDB Atlas (cloud) and update MONGODB_URI in .env
```

### 4. Run the Server

```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/login` - Login with email and password
- `GET /api/auth/me` - Get current user (requires authentication)
- `POST /api/auth/quiz-result` - Save quiz result (requires authentication)

### Health Check

- `GET /api/health` - Check server status

## API Request/Response Examples

### Signup

**Request:**
```json
POST /api/auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account created successfully",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

### Login

**Request:**
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "token": "jwt_token_here"
  }
}
```

### Get Current User (Protected)

**Request:**
```
GET /api/auth/me
Headers: Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "quizHistory": [...]
    }
  }
}
```

## Technologies Used

- Express.js - Web framework
- MongoDB - Database
- Mongoose - MongoDB ODM
- JWT - Authentication tokens
- bcryptjs - Password hashing
- CORS - Cross-origin resource sharing
