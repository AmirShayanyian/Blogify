const CategoryController = require('./category.controller');
const categoryController = new CategoryController();
const router = require('express').Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.findOne);
router.put('/:id', categoryController.updateOne);
router.delete('/:id', categoryController.deleteOne);

module.exports = {
  CategoryRoutes: router,
};
