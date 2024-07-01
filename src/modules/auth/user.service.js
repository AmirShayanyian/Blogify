const userModel = require('./user.model');

class UserService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = userModel;
  }

}
module.exports = UserService;
