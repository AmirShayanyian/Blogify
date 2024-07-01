const { hashPass } = require('../../common/utils/auth.util');
const UserService = require('./user.service');

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = new UserService();
  }
  signUp(req, res, next) {
    try {
      const {
        username,
        password,
        first_name,
        last_name,
        address,
        email,
        mobile,
      } = req.body;
      const user = this.#service.signUp({
        username,
        password: hashPass(password),
        first_name,
        last_name,
        address,
        email,
        mobile,
      });
      return res.status(201).json({
        status: 201,
        message: 'Created',
        data: user,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.send({
          status: 400,
          type: 'Bad Request',
          message: 'duplicate username! try changing it ',
        });
      }
      next(error);
    }
  }
}
