const Test = require('../models/Test');

class UpdateTestService {
  updateTest(test) {
    Test.findOneAndUpdate(
      { id: test.testId },
      {
        field: test.field,
        name: test.name,
        lastUpdated: test.lastUpdated,
        language: test.language,
        opening: test.opening,
        questions: test.questions,
        createrEmail: test.createrEmail,
        passingGrade: Number.parseInt(test.passingGrade),
        emailId: test.emailId,
        answerReview: test.answerReview,
        testUrl: test.testUrl,
        certificateUtl: test.certificateUtl,
        passingText: test.passingText,
        failText: test.failText
      },
      (err, doc) => {
        if (err) console.log(err);
      }
    );
  }
}

module.exports = new UpdateTestService();
