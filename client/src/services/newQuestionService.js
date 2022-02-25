import axios from 'axios';

class NewQuestionService {
  addQuestion(question) {
    axios.post('http://localhost:4000/api/questions/addQuestion', question);
  }
}

export default new NewQuestionService();