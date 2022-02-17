let Field = require('../models/Field');

class GetFieldsService {
  async getFields() {
    const data = await Field.find();
    return JSON.stringify(data);
  }
}

module.exports = new GetFieldsService();
