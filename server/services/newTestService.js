const Email = require('../models/Email');
const Test = require('../models/Test');

class NewTestService {
  addTest(test) {
    console.log(test.subject);
    const newTest = new Test({
      id: test.testId,
      name: test.name,
      lastUpdated: test.lastUpdated,
      language: test.language,
      opening: test.opening,
      questions: test.questions,
      createrEmail: test.createrEmail,
      emailId: test.emailId,
      answerReview: test.answerReview,
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
