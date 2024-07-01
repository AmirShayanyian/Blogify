const UserController = require('./user.controller');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const router = require('express').Router();
const userController = new UserController();

router.post('/signup', upload.single('pic'), userController.signUp);
router.post('/sign-in', userController.signIn);

module.exports = {
  AuthRoutes: router,
};
