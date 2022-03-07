import axios from 'axios';
import env from '../environments/environment';

const getTestById = {
  async getTestById(id) {
    try {
      const data = await axios.post(`${env.serverUrl}/api/tests/getById`, {
        id: id
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default getTestById;
