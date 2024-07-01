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
  async findOne(req, res, next) {
    const id = req.params;
    const blog = await this.#service.findOne(id);
    if (!blog) {
      return res.status(404).json({
        status: 404,
        message: `Blog with id :${id} not found `,
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'OK',
      data: blog,
    });
  }
  async updateOne(req, res, next) {
    try {
      const { title, short_desc, long_desc } = req.body;
      const id = req.params;
      const result = await this.#service.updateOne(id, {
        title,
        short_desc,
        long_desc,
      });
      return res.status(200).json({
        status: 200,
        message: 'OK',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteOne(req, res, next) {
    try {
      const id = req.params;
      const result = await this.#service.remove(id);
      return res.status(200).json({
        status: 200,
        message: 'OK',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
