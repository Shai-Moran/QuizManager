import axios from 'axios';

const getAllQuestions = {
  async getAllQuestions() {
    const data = await axios.get('http://localhost:4000/api/questions/getAll');
    return data;
  }
};

export default getAllQuestions