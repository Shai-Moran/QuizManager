import axios from 'axios';
import env from '../environments/environment';

const getUserById = {
  async getUserById(id) {
    const data = await axios.post(`${env.serverUrl}/api/users/getById`, {
      id: id
    });
    return data;
  }
};

export default getUserById;
