const { Comment } = require("../models");

const commentData = [
  {
    comment: "I just learned that in class!",
    creator_id: 4,
    post_id: 1,
  },
  {
    comment: "Very helpful!",
    creator_id: 3,
    post_id: 1,
  },
  {
    comment: "This is so true!",
    creator_id: 5,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
