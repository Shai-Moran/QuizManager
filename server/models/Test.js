const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = {
  name: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    required: true
  },
  language: {
    type: String,
    enum: ['English, Hebrew'],
    required: true
  },
  opening: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  answerReview: {
    type: Boolean,
    required: true
  },
  certificateUtl: {
    type: String,
    required: true
  },
  passingText: {
    type: String,
    required: true
  },
  failText: {
    type: String,
    required: true
  }
};

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
