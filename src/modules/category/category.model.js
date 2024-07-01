const { Schema, Mongoose, model } = require('mongoose');

const categorySchema = Schema({}, { timestamps: true });

const categoryModel = model('category', categorySchema);

module.exports = categoryModel;
