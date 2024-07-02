const { Schema, Mongoose, model, Types } = require('mongoose');

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    picture: { type: String },
  },
  { timestamps: true }
);

const categoryModel = model('category', categorySchema);

module.exports = categoryModel;
