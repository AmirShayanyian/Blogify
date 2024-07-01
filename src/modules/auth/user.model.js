const { Schema, Mongoose, model } = require('mongoose');

const userSchema = Schema({}, { timestamps: true });

const userModel = model('user', userSchema);

module.exports = userModel;
