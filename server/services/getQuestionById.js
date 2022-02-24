let Question = require('../models/Question');

class GetQuestionById {
  async getQuestionById(id) {
    const data = await Question.find({ id: id });
    return JSON.stringify(data);
  }
}

module.exports = new GetQuestionById();