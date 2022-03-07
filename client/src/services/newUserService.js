import axios from 'axios';
import env from '../environments/environment';

class NewUserService {
  addUser(user) {
    console.log(user);
    axios.post(`${env.serverUrl}/api/users/addUser`, user);
  }
}

export default new NewUserService();
