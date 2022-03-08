import axios from 'axios';
import env from '../environments/environment';

const getAllQuestions = {
  async getAllQuestions() {
    const data = await axios.get(`${env.serverUrl}/api/questions/getAll`);
    return data;
  }
};

export default getAllQuestions;
