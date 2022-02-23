import axios from 'axios';

class AllTestsService {
  async getAllTests(field) {
    const data = axios.post('http://localhost:4000/api/tests/getAllByField', {
      field: field
    });
    return data;
  }
}

export default new AllTestsService();
