const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = {
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passward: {
    type: String,
    required: true
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
