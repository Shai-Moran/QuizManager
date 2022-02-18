let Test = require('../models/Test');

class GetAllTestsService {
  async getAllTests() {
    const data = await Test.find();
    return JSON.stringify(data);
  }
}

module.exports = new GetAllTestsService();
