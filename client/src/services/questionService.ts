import http from "./httpService";
import axios from 'axios';

const serverRoute = "/api/Questions/";

const QuestionService = {
  async getAllQuestions() {
    const data = await axios.get('http://localhost:4000/api/questions/getAll');
    return data;
  },

  async addQuestion(question: any) {
    console.log(question);
    await axios.post('http://localhost:4000/api/questions/addQuestion', question);
  },

  async deleteQuestion(question: any) {
    return await http.delete(serverRoute + "deleteQuestion", question);
  },
};

export default QuestionService;
