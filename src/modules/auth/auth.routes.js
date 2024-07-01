const { checkAuth } = require('../../common/middlewares/check-auth.handler');
const UserController = require('./user.controller');
const multer = require('multer');
const upload = multer({ dest: 'public/profile-pics' });
const router = require('express').Router();
const userController = new UserController();

router.post('/signup', upload.single('pic'), userController.signUp);
router.post('/send-profile-pic', upload.single('pic'), userController.sendPic);
router.post('/sign-in', userController.signIn);

module.exports = {
  AuthRoutes: router,
};
