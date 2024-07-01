const { Schema, Mongoose, model } = require('mongoose');

const blogSchema = Schema({}, { timestamps: true });

const blogModel = model('blog', blogSchema);

module.exports = blogModel;
