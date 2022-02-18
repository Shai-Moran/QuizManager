let Email = require('../models/Email');
let Test = require('../models/Test');

class NewTestService {
  addTest(test) {
    const newTest = new Test({
      id: test.testId,
      field: test.field,
      name: test.name,
      lastUpdated: test.lastUpdated,
      language: test.language,
      opening: test.opening,
      questions: test.questions,
      createrEmail: test.createrEmail,
      emailId: test.emailId,
      answerReview: test.answerReview,
      testUrl: test.testUrl,
      certificateUtl: test.certificateUtl,
      passingText: test.passingText,
      failText: test.failText
    });

    const newTestEmail = new Email({
      id: test.emailId,
      subject: test.subject,
      testId: test.testId,
      successBody: test.successBody,
      failBody: test.failBody
    });

    newTest.save();
    newTestEmail.save();
  }
}

module.exports = new NewTestService();
