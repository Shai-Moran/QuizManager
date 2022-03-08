import axios from 'axios';
import env from '../environments/environment';

const getAllQuestions = {
  async getAllQuestions() {
    try{
      const data = await axios.get(`${env.serverUrl}/api/questions/getAll`);
      return data;
    }
    catch (error){
      console.log(error);
    }
  }
};

export default getAllQuestions;
