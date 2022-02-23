let Question = require('../models/Question');

class GetAllQuestionsService {
  async getAllQuestions() {
    const data = await Question.find();
    return JSON.stringify(data);
  }
}

module.exports = new GetAllQuestionsService();