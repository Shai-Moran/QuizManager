import http from "./httpService";

export interface Question {
  Id: number;
  Title: string;
}

const serverRoute = "/api/Questions/";

const QuestionService = {
  async getAllQuestions() {
    return await http.get(serverRoute + "getQuestions");
  },

  async addQuestion(question: any) {
    return await http.post(serverRoute + "addQuestion", question);
  },

  async deleteQuestion(question: any) {
    return await http.delete(serverRoute + "deleteQuestion", question);
  },
};

export default QuestionService;
