const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestInstanceSchema = {
  id: {
    type: String,
    required: true
  },
  testId: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  },
  grade: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
};

const TestInstance = mongoose.model('TestInstance', TestInstanceSchema);

module.exports = TestInstance;
