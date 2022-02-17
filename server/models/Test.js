const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = {
  id: {
    type: String,
    required: true
  },
  field: {
    type: String,
    required: true
  },
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
    required: true
  },
  opening: {
    type: Object,
    required: true
  },
  questions: {
    type: Array,
    required: true
  },
  createrEmail: {
    type: String,
    required: true
  },
  emailId: {
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
    type: Object,
    required: true
  },
  failText: {
    type: Object,
    required: true
  }
};

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
