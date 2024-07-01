const { hashPass } = require('../../common/utils/auth.util');
const UserService = require('./user.service');
const autoBind = require('auto-Bind');

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
  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      const exist = this.#service.checkUserExistByUsername(username);
      if (exist) {
        const token = await this.#service.sigIn({ username, password });
        if (token)
          return res.status(200).json({
            status: 200,
            message: 'OK',
            token,
          });
      }
    } catch (error) {
      next(error);
    }
  }
  async sendPic(req, res, next) {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: 'BAD REQUEST',
      });
    }
    const file = req.file;
    console.log(file);
    return res.status(200).json({
      message:"OK"
    })
  }
}
module.exports = UserController;
