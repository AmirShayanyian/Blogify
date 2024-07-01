const autoBind = require('auto-Bind');
const BlogService = require('./blog.service');

class BlogController {
  #service;
  constructor() {
    this.#service = new BlogService();
    autoBind(this);
  }

  createBlog(req, res, next) {
    try {
      const { title, short_desc, long_desc } = req.body;
      const blog = this.#service.create({
        title,
        short_desc,
        long_desc,
        author: req.user.id,
      });
      return res.json(blog);
    } catch (error) {
      next(error);
    }
  }
  async getBlogs(req, res, next) {
    try {
      const blogs = await this.#service.findAll();
      console.log(blogs);
      return res.json({
        status: 200,
        message: 'OK',
        data: blogs,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
