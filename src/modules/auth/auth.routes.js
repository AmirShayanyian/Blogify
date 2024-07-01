const UserController = require('./user.controller');

const router = require('express').Router();
const userController = new UserController();

router.post('/signup', userController.signUp);

module.exports = {
  AuthRoutes: router,
};
