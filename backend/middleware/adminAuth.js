// filepath: backend/middleware/adminAuth.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticateAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-key');

    // Optional: fetch user to ensure still exists and role matches
    const user = await User.findById(decoded.userId).select('name email role');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }

    req.user = { id: user._id.toString(), name: user.name, email: user.email, role: user.role };
    next();
  } catch (err) {
    const message = err.name === 'TokenExpiredError' ? 'Token expired' : 'Unauthorized';
    res.status(401).json({ success: false, message });
  }
};

export default authenticateAdmin;