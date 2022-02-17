import http from "./httpService";
import axios from 'axios';

const serverRoute = "/api/Questions/";

const QuestionService = {
  async getAllQuestions() {
    const data = await axios.get('http://localhost:4000/api/questions/getAllQuestions');
    return data;
  },

  async addQuestion(question: any) {
    return await http.post(serverRoute + "addQuestion", question);
  },

  async deleteQuestion(question: any) {
    return await http.delete(serverRoute + "deleteQuestion", question);
  },
};

export default QuestionService;
