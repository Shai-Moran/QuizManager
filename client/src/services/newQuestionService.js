import axios from 'axios';
import env from '../environments/environment';

class NewQuestionService {
  addQuestion(question) {
    axios.post(`${env.serverUrl}/api/questions/addQuestion`, question);
  }
}

export default new NewQuestionService();