import axios from 'axios';
import env from '../environments/environment';

class DeleteQuestionService {
  deleteQuestion(question) {
    axios.delete(`${env.serverUrl}/api/questions/deleteQuestion`, question);
  }
}

export default new DeleteQuestionService();
