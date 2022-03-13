import axios from 'axios';
import env from '../environments/environment';

class UpdateTestService {
  updateTest(test) {
    try {
      axios.post(`${env.serverUrl}/api/tests/update`, test);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UpdateTestService();
