const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = {
  id: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  testId: {
    type: Object,
    required: true
  },
  successBody: {
    type: Object,
    required: true
  },
  failBody: {
    type: Object,
    required: true
  }
};

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;
