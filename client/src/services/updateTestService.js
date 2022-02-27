import axios from 'axios';

class UpdateTestService {
  updateTest(test) {
    axios.post('http://localhost:4000/api/tests/update', test);
  }
}

export default new UpdateTestService();
