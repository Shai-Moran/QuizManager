const TestInstance = require('../models/TestInstance');

class NewTestInstanceService {
  addTestInstance(testInstance) {
    const newTestInstance = new TestInstance({
      id: testInstance.id,
      testId: testInstance.testId,
      studentId: testInstance.userId,
      questions: testInstance.questions,
      grade: testInstance.grade
    });
    newTestInstance.save();
  }
}

module.exports = new NewTestInstanceService();
