const { Post } = require("../models");

const postData = [
  {
    post_title: "Why MCV is so important",
    post_content:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    creator_id: 3,
  },
  {
    post_title: "Authentication vs. Authorization",
    post_content:
      "There is a difference. Authentication means confirming your identity, whereas authorization means being alowed access to the system",
    creator_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
