import axios from 'axios';

const deleteQuestionById = {
  async deleteQuestionById(id) {
    const data = await axios.delete('http://localhost:4000/api/questions/deleteQuestion', {
      id: id
    });
    return data;
  }
};

export default deleteQuestionById;