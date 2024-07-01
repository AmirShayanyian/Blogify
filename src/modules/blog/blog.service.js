const blogModel = require('./blog.model');
const autoBind = require('auto-Bind');
class BlogService {
  #model;
  constructor() {
    this.#model = blogModel;
    autoBind(this);
  }

  async create(blogModel) {
    return await this.#model.create(blogModel);
  }
}
module.exports = BlogService;
