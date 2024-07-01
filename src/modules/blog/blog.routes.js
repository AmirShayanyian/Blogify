const { checkAuth } = require('../../common/middlewares/check-auth.handler');
const BlogController = require('./blog.controller');

const router = require('express').Router();
const blogController = new BlogController();

router.post('/', checkAuth, blogController.createBlog);
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.findOne);
router.put('/:id', blogController.updateOne);
router.delete('/:id', blogController.deleteOne);

module.exports = {
  BlogRoutes: router,
};
