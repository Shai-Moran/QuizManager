class QuestionsController {
  // Get Questions
  getAllQuestions() {
    return getAllQuestions();
  }

  // Add question to the list
  addQuestion(question) {
    if (!question.Title) throw "question has no title";
    return addQuestion(question);
  }
}

module.exports = new QuestionsController();
