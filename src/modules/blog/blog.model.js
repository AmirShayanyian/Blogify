const { Schema, model, Mongoose, Types } = require('mongoose');

const blogSchema = Schema(
  {
    title: { type: String, required: true, index: true },
    short_desc: { type: String, required: false },
    long_desc: { type: String, required: true },
    author: { type: Types.ObjectId, required: true },
    likes: { type: [Types.ObjectId] },
    pictures: { type: [String] },
  },
  { timestamps: true }
);

const blogModel = model('blog', blogSchema);

module.exports = blogModel;
