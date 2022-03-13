import axios from 'axios';
import env from '../environments/environment';

class NewUserService {
  addUser(user) {
    try {
      axios.post(`${env.serverUrl}/api/users/addUser`, user);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new NewUserService();
