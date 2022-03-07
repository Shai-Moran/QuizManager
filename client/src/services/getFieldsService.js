import axios from 'axios';
import env from '../environments/environment';

class GetFieldsService {
  async getFields() {
    const data = await axios.get(`${env.serverUrl}/api/fields/getFields`);
    return data;
  }
}

export default new GetFieldsService();
