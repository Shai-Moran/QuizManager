import axios from 'axios';
import env from '../environments/environment';

class UpdateTestService {
  updateTest(test) {
    axios.post(`${env.serverUrl}/api/tests/update`, test);
  }
}

export default new UpdateTestService();
