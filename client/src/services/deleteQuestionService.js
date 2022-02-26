import axios from 'axios';

class DeleteQuestionService {
  deleteQuestion(question) {
    axios.delete('http://localhost:4000/api/questions/deleteQuestion', question);
  }
}

export default new DeleteQuestionService();