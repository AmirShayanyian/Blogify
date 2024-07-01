const userModel = require('./user.model');

class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = userModel;
  }
  signUp(userModel) {
    return this.#model.create(userModel);
  }
}
module.exports = UserService;
