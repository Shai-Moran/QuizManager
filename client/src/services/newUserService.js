import axios from 'axios';

class NewUserService {
  addUser(user) {
    console.log(user);
    axios.post('http://localhost:4000/api/users/addUser', user);
  }
}

export default new NewUserService();
