let Test = require('../models/Test');

class GetTestById {
  async getTestById(id) {
    const data = await Test.find({ id: id });
    return JSON.stringify(data);
  }
}

module.exports = new GetTestById();
