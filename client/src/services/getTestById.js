import axios from 'axios';
import env from '../environments/environment';

const getTestById = {
  async getTestById(id) {
    const data = await axios.post(`${env.serverUrl}/api/tests/getById`, {
      id: id
    });
    return data;
  }
};

export default getTestById;
