import axios from 'axios';
import env from '../environments/environment';

class AllTestsService {
  async getAllTests(field) {
    const data = axios.post(`${env.serverUrl}/api/tests/getAllByField`, {
      field: field
    });
    return data;
  }
}

export default new AllTestsService();
