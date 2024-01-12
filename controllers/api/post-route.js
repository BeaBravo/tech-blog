const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// api/posts endpoint

// GET all posts
router.get("/", withAuth, async (req, res) => {
  const allPosts = await Post.findAll({
    include: [
      { model: User, as: "user" },
      { model: Comment, as: "comments" },
    ],
  });
  res.status(200).json(allPosts);
});

// GET one post by id api/posts/:id
router.get("/:id", withAuth, async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Comment }],
  });
  // console.log(post.get({ plain: true }));
  res.status(200).json(post.get({ plain: true }));
});

module.exports = router;
