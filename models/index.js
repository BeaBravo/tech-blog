//import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//Post belongsTo one User
Post.belongsTo(User, { foreignKey: "creator_id" });

//User hasMany Posts
User.hasMany(Post, {
  foreignKey: "creator_id",
  onDelete: "CASCADE",
});

//User hasMany Comments
User.hasMany(Comment, {
  foreignKey: "creator_id",
  onDelete: "CASCADE",
});

//comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "creator_id",
});

//Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

//Comment belongs to post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Post,
  Comment,
};
