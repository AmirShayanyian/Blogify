const autoBind = require('auto-Bind');
const categoryModel = require('./category.model');

class CategoryService {
  #model;
  constructor() {
    this.#model = categoryModel;
    autoBind(this);
  }
}

module.exports = CategoryService;
