import axios from 'axios';
import env from '../environments/environment';

class NewTestService {
  addTest(test) {
    console.log(test);
    axios.post(`${env.serverUrl}/api/tests/addTest`, test);
  }
}

export default new NewTestService();
