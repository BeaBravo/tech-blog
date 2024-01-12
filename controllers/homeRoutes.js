const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [{ model: User, as: "user" }],
    });

    const posts = allPosts.map((post) => {
      return post.get({ plain: true });
    });
    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//logout page
router.get("/login", (req, res) => {
  //if a session exists, redirect to the homepage
  if (req.session.logged_in) {
    res.direct("/");
    return;
  }
  res.render("login");
});

//signup page
router.get("/signup", (req, res) => {
  //if a session exists, redirect to the homepage
  if (req.session.logged_in) {
    res.direct("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
