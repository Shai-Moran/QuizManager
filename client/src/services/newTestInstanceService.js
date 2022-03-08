import axios from 'axios';
import env from '../environments/environment';

class NewTestInstanceService {
  addTestInstance(testInstance) {
    console.log(testInstance);
    axios.post(`${env.serverUrl}/api/tests/addTestInstance`, testInstance);
  }
}

export default new NewTestInstanceService();
