import axios from 'axios';
import env from '../environments/environment';

class NewTestService {
  addTest(test) {
    try {
      axios.post(`${env.serverUrl}/api/tests/addTest`, test);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new NewTestService();
