const { Schema, model, Types } = require('mongoose');

const commentSchema = Schema(
  {
    text: { type: String, required: true },
    likes: { type: [Types.ObjectId] },
    author: { type: Types.ObjectId },
  },
  { timestamps: true }
);

const commentModel = model('comment', commentSchema);

module.exports = commentModel;
