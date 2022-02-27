import axios from 'axios';

class NewTestInstanceService {
  addTestInstance(testInstance) {
    console.log(testInstance);
    axios.post('http://localhost:4000/api/tests/addTestInstance', testInstance);
  }
}

export default new NewTestInstanceService();
