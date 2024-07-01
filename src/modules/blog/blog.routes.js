const BlogController = require('./blog.controller');

const router = require('express').Router();
const blogController = new BlogController();

router.post('/',blogController.create);

module.exports = {
  BlogRoutes: router,
};
