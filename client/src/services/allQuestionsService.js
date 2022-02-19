import axios from 'axios';

class AllQuestionsService {
  async getAllQuestions() {
    const data = axios.get('http://localhost:4000/api/questions/getAll');
    return data;
  }
}

export default new AllQuestionsService();