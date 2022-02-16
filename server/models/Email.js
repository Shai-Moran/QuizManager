const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = {
  subject: {
    type: String,
    required: true
  },
  testId: {
    type: Object,
    required: true
  },
  body: {
    type: Object,
    required: true
  }
};

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;
