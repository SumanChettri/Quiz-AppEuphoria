import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { authenticateAdmin } from '../middleware/adminAuth.js';

const router = express.Router();

// Admin login route (separate from regular user login)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user || user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Invalid admin credentials'
      });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid admin credentials'
      });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Admin login successful',
      data: {
        admin: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during admin login'
    });
  }
});

// Create admin user (for initial setup)
router.post('/create-admin', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and password'
      });
    }

    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Admin user already exists'
      });
    }

    const admin = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
      role: 'admin'
    });

    await admin.save();

    res.status(201).json({
      success: true,
      message: 'Admin user created successfully',
      data: {
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role
        }
      }
    });
  } catch (error) {
    console.error('Create admin error:', error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error creating admin'
    });
  }
});

// Apply admin authentication to all routes except login
router.use('/login', (req, res, next) => next()); // Skip auth for login
router.use(authenticateAdmin);

// Get all users with pagination and filtering
router.get('/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    const role = req.query.role || 'all';

    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    if (role !== 'all') {
      query.role = role;
    }

    const users = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving users'
    });
  }
});

// Get user by ID with full details
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: { user }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving user'
    });
  }
});

// Update user
router.put('/users/:id', async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const updates = {};

    if (name) updates.name = name.trim();
    if (email) updates.email = email.toLowerCase().trim();
    if (role && ['user', 'admin'].includes(role)) updates.role = role;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Update user error:', error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error updating user'
    });
  }
});

// Delete user
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting user'
    });
  }
});

// Get dashboard statistics
router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const adminUsers = await User.countDocuments({ role: 'admin' });
    const regularUsers = totalUsers - adminUsers;

    // Get quiz statistics
    const usersWithQuizzes = await User.find({ 'quizHistory.0': { $exists: true } });
    const totalQuizzes = usersWithQuizzes.reduce((sum, user) => sum + user.quizHistory.length, 0);

    // Calculate average score
    let totalScore = 0;
    let totalQuestions = 0;
    usersWithQuizzes.forEach(user => {
      user.quizHistory.forEach(quiz => {
        totalScore += quiz.score;
        totalQuestions += quiz.totalQuestions;
      });
    });

    const averageScore = totalQuestions > 0 ? (totalScore / totalQuestions * 100).toFixed(2) : 0;

    // Recent activity (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentUsers = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });
    const recentQuizzes = await User.aggregate([
      { $unwind: '$quizHistory' },
      { $match: { 'quizHistory.completedAt': { $gte: thirtyDaysAgo } } },
      { $count: 'count' }
    ]);
    const recentQuizCount = recentQuizzes.length > 0 ? recentQuizzes[0].count : 0;

    res.json({
      success: true,
      data: {
        overview: {
          totalUsers,
          adminUsers,
          regularUsers,
          totalQuizzes,
          averageScore: parseFloat(averageScore)
        },
        recentActivity: {
          newUsers: recentUsers,
          quizzesTaken: recentQuizCount,
          period: 'last 30 days'
        }
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving statistics'
    });
  }
});

// Get quiz analytics
router.get('/analytics/quizzes', async (req, res) => {
  try {
    const categoryStats = await User.aggregate([
      { $unwind: '$quizHistory' },
      {
        $group: {
          _id: '$quizHistory.category',
          count: { $sum: 1 },
          avgScore: { $avg: '$quizHistory.score' },
          totalQuestions: { $sum: '$quizHistory.totalQuestions' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const difficultyStats = await User.aggregate([
      { $unwind: '$quizHistory' },
      {
        $group: {
          _id: '$quizHistory.difficulty',
          count: { $sum: 1 },
          avgScore: { $avg: '$quizHistory.score' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        categories: categoryStats,
        difficulties: difficultyStats
      }
    });
  } catch (error) {
    console.error('Get quiz analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error retrieving quiz analytics'
    });
  }
});

// Export users data
router.get('/export/users', async (req, res) => {
  try {
    const users = await User.find({})
      .select('name email role quizHistory createdAt')
      .sort({ createdAt: -1 });

    // Convert to CSV format
    const csvData = users.map(user => ({
      Name: user.name,
      Email: user.email,
      Role: user.role,
      QuizzesTaken: user.quizHistory.length,
      TotalScore: user.quizHistory.reduce((sum, quiz) => sum + quiz.score, 0),
      CreatedAt: user.createdAt.toISOString().split('T')[0]
    }));

    res.json({
      success: true,
      data: csvData
    });
  } catch (error) {
    console.error('Export users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error exporting users'
    });
  }
});

export default router;
