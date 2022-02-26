let User = require('../models/User');

class NewUserService {
  addUser(user) {
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
  }
}

module.exports = new NewUserService();
