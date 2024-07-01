const autoBind = require('auto-Bind');
const BlogService = require('./blog.service');

class BlogController {
  #service;
  constructor() {
    this.#service = new BlogService();
    autoBind(this);
  }

  create(req, res, next) {
    try {
      const { title, short_desc, long_desc } = req.body;
      const blog = this.#service.create();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
