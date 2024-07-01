const { Schema, Mongoose, model } = require('mongoose');

const commentSchema = Schema({}, { timestamps: true });

const commentModel = model('comment', commentSchema);

module.exports = commentModel;
