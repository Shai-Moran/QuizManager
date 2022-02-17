import axios from 'axios';

class GetFieldsService {
  async getFields() {
    const data = await axios.get('http://localhost:4000/api/fields/getFields');
    return data;
  }
}

export default new GetFieldsService();
