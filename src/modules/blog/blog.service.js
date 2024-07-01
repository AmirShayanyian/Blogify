const { mongoose } = require('mongoose');
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
  async findOne(id) {
    id = new mongoose.Types.ObjectId(id);
    const blog = await this.#model.findOne(
      { _id: id },
      { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 }
    );
    return blog;
  }
  async updateOne(id, updateModel) {
    id = new mongoose.Types.ObjectId(id);
    const blog = this.#model.updateOne({ _id: id }, updateModel);
    return blog;
  }
  async remove(id) {
    id = new mongoose.Types.ObjectId(id);
    const result = await this.#model.deleteOne({ _id: id });
    return result;
  }
}
module.exports = BlogService;
