const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = {
  fieldName: {
    type: String,
    required: true
  }
};

const Field = mongoose.model('Field', FieldSchema);

module.exports = Field;
