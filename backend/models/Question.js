import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  category: { type: String, required: true, trim: true, lowercase: true },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: [true, 'Difficulty is required'],
    lowercase: true,
    trim: true,
    default: 'medium',
  },
  question: { type: String, required: [true, 'Question is required'], trim: true },
  options: {
    type: [String],
    // Ensure options are non-empty strings and at least 2
    validate: [
      {
        validator: function (arr) {
          return Array.isArray(arr) && arr.filter((s) => typeof s === 'string' && s.trim().length > 0).length >= 2;
        },
        message: 'At least two options are required',
      },
    ],
    required: true,
    // Trim each option string
    set: (arr) => Array.isArray(arr) ? arr.map((s) => (typeof s === 'string' ? s.trim() : String(s).trim())).filter(Boolean) : arr,
  },
  answer: {
    type: String,
    required: [true, 'Answer is required'],
    select: false, // never expose in queries by default
    trim: true,
  },
}, { timestamps: true });

// Ensure answer is one of the options
QuestionSchema.path('answer').validate(function (val) {
  const opts = Array.isArray(this.options) ? this.options : [];
  return typeof val === 'string' && opts.includes(val);
}, 'Answer must be one of the options');

const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);
export default Question;