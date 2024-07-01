const { AuthRoutes } = require('./auth/auth.routes');
const { BlogRoutes } = require('./blog/blog.routes');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.send({
    message: 'Hi this is good',
  });
});
router.use('/auth', AuthRoutes);
router.use('/blog', BlogRoutes);
module.exports = {
  MainRouter: router,
};
