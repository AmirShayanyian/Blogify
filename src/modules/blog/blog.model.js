const { Schema, model, Mongoose, Types } = require('mongoose');

const blogSchema = new Schema(
  {
    title: { type: String, required: true, index: true },
    short_desc: { type: String, required: false },
    long_desc: { type: String, required: true },
    author: { type: Types.ObjectId, required: true },
    likes: { type: [Types.ObjectId], ref: 'user', required: false },
    pictures: { type: [String] },
    category: { type: Types.ObjectId, ref: 'category' },
  },
  { timestamps: true }
);
blogSchema.virtual('blogCategory', {
  ref: 'category',
  localField: 'category',
  foreignField: 'blogs',
});

const blogModel = model('blog', blogSchema);

module.exports = blogModel;
