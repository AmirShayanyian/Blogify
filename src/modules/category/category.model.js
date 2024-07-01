const { Schema, Mongoose, model, Types } = require('mongoose');

const categorySchema = Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    picture: { type: String },
    blogs: { type: [Types.ObjectId] },
  },
  { timestamps: true }
);

const categoryModel = model('category', categorySchema);

module.exports = categoryModel;
