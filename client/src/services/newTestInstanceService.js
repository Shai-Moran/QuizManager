import axios from 'axios';
import env from '../environments/environment';

class NewTestInstanceService {
  addTestInstance(testInstance) {
    try {
      axios.post(`${env.serverUrl}/api/tests/addTestInstance`, testInstance);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new NewTestInstanceService();
