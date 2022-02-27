let User = require('../models/User');

class NewUserService {
  async addUser(user) {
    const data = await User.find({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber
    });
    if (data[0] === undefined) {
      if (user.userType === 'student') {
        const newUser = new User({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          userType: user.userType
        });
        newUser.save();
      } else {
        const newUser = new User({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          userType: user.userType,
          password: user.password
        });
        newUser.save();
      }
    } else {
      console.log('user already created');
    }
  }
}

module.exports = new NewUserService();
