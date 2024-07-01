const { AuthRoutes } = require('./auth/auth.routes');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.send({
    message: 'Hi this is good',
  });
});
router.use(AuthRoutes);
module.exports = {
  MainRouter: router,
};
