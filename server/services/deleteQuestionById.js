let Question = require('../models/Question');

class DeleteQuestionById {
  async deleteQuestionById(id) {
    const data = await Question.find({ id: id });
    return JSON.stringify(data);
  }
}

module.exports = new DeleteQuestionById();