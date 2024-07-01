const autoBind = require('auto-Bind');
const CategoryService = require('./category.service');

class CategoryController {
  #service;
  constructor() {
    this.#service = new CategoryService();
    autoBind(this);
  }
}

module.exports = CategoryController;
