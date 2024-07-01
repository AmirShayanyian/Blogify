const { Schema, Types, model } = require('mongoose');
const Roles = require('../../common/constants/roles.enum');

const userSchema = Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    address: { type: String },
    bookmarks: { type: [Types.ObjectId] },
    likes: { type: [Types.ObjectId] },
    profile_pic: { type: String },
    role: { type: String, enum: Roles, default: Roles.User },
  },
  { timestamps: true }
);

userSchema.virtual('blogs', {
  ref: 'blog',
  localField: '_id',
  foreignField: 'author',
});
const userModel = model('user', userSchema);

module.exports = userModel;
