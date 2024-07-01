const autoBind = require('auto-Bind');
const CategoryService = require('./category.service');

class CategoryController {
  #service;
  constructor() {
    this.#service = new CategoryService();
    autoBind(this);
  }

  createCategory(req, res, next) {
    try {
      const { name, description } = req.body;
      const category = this.#service.create({ name, description });
      return res.json(category);
    } catch (error) {
      next(error);
    }
  }
  async getCategories(req, res, next) {
    try {
      const categories = await this.#service.findAll();
      return res.json({
        status: 200,
        message: 'OK',
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  }
  async findOne(req, res, next) {
    const id = req.params;
    const category = await this.#service.findOne(id);
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: `Category with id :${id} not found `,
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'OK',
      data: category,
    });
  }
  async updateOne(req, res, next) {
    try {
      const { name, description } = req.body;
      const id = req.params;
      const result = await this.#service.updateOne(id, { name, description });
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

module.exports = CategoryController;
