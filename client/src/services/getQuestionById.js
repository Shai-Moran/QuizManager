import axios from 'axios';

const getQuestionById = {
  async getQuestionById(id) {
    const data = await axios.post('http://localhost:4000/api/questions/getById', {
      id: id
    });
    return data;
  }
};

export default getQuestionById;