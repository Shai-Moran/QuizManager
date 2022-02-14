const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = {
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
    enum: ['OneAnswer, MultiAnswer'],
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
};

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
