const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = {
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  questionType: {
    type: String,
    required: true
  },
  viewAnswers: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  points: {
    type: Number,
    required: true
  }
};

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
