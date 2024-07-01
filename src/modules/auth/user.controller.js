const UserService = require('./user.service');

class UserController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = new UserService();
  }
  
}
