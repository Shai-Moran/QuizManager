import axios from 'axios';
import env from '../environments/environment';

const getQuestionById = {
  async getQuestionById(id) {
    try {
      const data = await axios.post(`${env.serverUrl}/api/questions/getById`, {
        id: id
      });
      return data;
    }
    catch (error) {
      console.log(error)
    }
  }
};

export default getQuestionById;
