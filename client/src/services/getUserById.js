import axios from 'axios';
import env from '../environments/environment';

const getUserById = {
  async getUserById(id) {
    try {
      const data = await axios.post(`${env.serverUrl}/api/users/getById`, {
        id: id
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default getUserById;
