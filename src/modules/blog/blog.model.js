const { Schema, model, Mongoose, Types } = require('mongoose');

const blogSchema = Schema(
  {
    title: { type: String, required: true, index: true },
    short_desc: { type: String, required: false },
    long_desc: { type: String, required: true },
    author: { type: Types.ObjectId, required: true },
    likes: { type: [Types.ObjectId], ref: 'user', required: false },
    pictures: { type: [String] },
  },
  { timestamps: true }
);
blogSchema.virtual('parent', {
  ref: 'category',
  localField: '',
});

const blogModel = model('blog', blogSchema);

module.exports = blogModel;
