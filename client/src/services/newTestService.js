import axios from 'axios';

class NewTestService {
  addTest(test) {
    console.log(test);
    axios.post('http://localhost:4000/api/tests/addTest', test);
  }
}

export default new NewTestService();
