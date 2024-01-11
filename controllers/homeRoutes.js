const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// GET all posts
router.get("/", async (req, res) => {
  const allPosts = await Post.findAll({
    include: [
      { model: User, as: "user" },
      //   { model: Comment, as: "comments" },
    ],
  });

  const posts = allPosts.map((post) => {
    console.log(post.getDate);
    return post.get({ plain: true });
  });
  console.log(posts);
  res.render("homepage", { posts });
});

module.exports = router;
