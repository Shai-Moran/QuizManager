let Test = require('../models/Test');

class GetAllTestsService {
  async getAllTestsByField(field) {
    const data = await Test.find({ field: field });
    return JSON.stringify(data);
  }
}

module.exports = new GetAllTestsService();
