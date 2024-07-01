const { checkAuth } = require('../../common/middlewares/check-auth.handler');
const BlogController = require('./blog.controller');

const router = require('express').Router();
const blogController = new BlogController();

router.post('/', checkAuth, blogController.create);

module.exports = {
  BlogRoutes: router,
};
