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
  async findAll() {
    return await this.#model.find(
      {},
      { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 }
    );
  }
}
module.exports = BlogService;
