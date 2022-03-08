import axios from 'axios';
import env from '../environments/environment';

class GetFieldsService {
  async getFields() {
    try {
      const data = await axios.get(`${env.serverUrl}/api/fields/getFields`);
      return data;
    } catch (error) {
      console.log(error);
      return { data: [] };
    }
  }
}

export default new GetFieldsService();
