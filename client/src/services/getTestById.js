import axios from 'axios';

const getTestById = {
  async getTestById(id) {
    const data = await axios.post('http://localhost:4000/api/tests/getById', {
      id: id
    });
    return data;
  }
};

export default getTestById;
