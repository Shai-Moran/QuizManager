import axios from 'axios';

const getUserById = {
  async getUserById(id) {
    const data = await axios.post('http://localhost:4000/api/users/getById', {
      id: id
    });
    return data;
  }
};

export default getUserById;
