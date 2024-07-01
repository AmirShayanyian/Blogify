const autoBind = require('auto-Bind');
const categoryModel = require('./category.model');

class CategoryService {
  #model;
  constructor() {
    this.#model = categoryModel;
    autoBind(this);
  }

  async create(categoryModel) {
    return await this.#model.create(categoryModel);
  }
  async findAll() {
    return await this.#model.find(
      {},
      { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 }
    );
  }
  async findOne(id) {
    id = new mongoose.Types.ObjectId(id);
    const category = await this.#model.findOne(
      { _id: id },
      { _id: 0, createdAt: 0, updatedAt: 0, __v: 0 }
    );
    return category;
  }
  async updateOne(id, updateModel) {
    id = new mongoose.Types.ObjectId(id);
    const category = this.#model.updateOne({ _id: id }, updateModel);
    return category;
  }
  async remove(id) {
    id = new mongoose.Types.ObjectId(id);
    const result = await this.#model.deleteOne({ _id: id });
    return result;
  }
}

module.exports = CategoryService;
