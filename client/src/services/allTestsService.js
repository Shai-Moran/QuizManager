import axios from 'axios';

class AllTestsService {
  async getAllTests() {
    const data = axios.get('http://localhost:4000/api/tests/getAll');
    return data;
  }
}

export default new AllTestsService();
