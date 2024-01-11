const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        { model: User, as: "user" },
        //   { model: Comment, as: "comments" },
      ],
    });

    const posts = allPosts.map((post) => {
      // console.log(post.getDate);
      return post.get({ plain: true });
    });
    //   console.log(posts);
    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login page
router.get("/login", (req, res) => {
  //if a session exists, redirect to the homepage
  if (req.session.logged_in) {
    res.direct("/");
    return;
  }
  res.render("login");
});

module.exports = router;
