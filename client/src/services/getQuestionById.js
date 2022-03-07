import axios from 'axios';
import env from '../environments/environment';

const getQuestionById = {
  async getQuestionById(id) {
    const data = await axios.post(`${env.serverUrl}/api/questions/getById`, {
      id: id
    });
    return data;
  }
};

export default getQuestionById;
