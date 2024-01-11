const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// api/posts endpoint

// GET all posts
router.get("/", async (req, res) => {
  const allPosts = await Post.findAll({
    include: [
      { model: User, as: "user" },
      { model: Comment, as: "comments" },
    ],
  });
  res.status(200).json(allPosts);
});

module.exports = router;
