const { verifyPass, signToken } = require('../../common/utils/auth.util');
const userModel = require('./user.model');
const autoBind = require('auto-Bind');
class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = userModel;
  }
  signUp(userModel) {
    return this.#model.create(userModel);
  }
  async sigIn(userModel) {
    const { username, password } = userModel;

    const user = await this.checkUserExistByUsername(username);
    const verify = await verifyPass(password, user.password);
    if (verify) {
      const token = await signToken({ id: user._id, username: user.username });
      return token;
    }
  }
  async checkUserExistByUsername(username) {
    const user = await userModel.findOne({ username });
    if (user) return user;
  }
}
module.exports = UserService;
