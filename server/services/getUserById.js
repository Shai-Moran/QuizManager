let User = require('../models/User');

class GetUserById {
  async getUserById(id) {
    const data = await User.find({ id: id });
    return JSON.stringify(data);
  }
}

module.exports = new GetUserById();
