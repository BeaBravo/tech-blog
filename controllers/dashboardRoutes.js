const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all posts from the user logged in
router.get("/", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  //find all posts where user_id is the same as the session
  const allPostsFromUser = await Post.findAll({
    where: { creator_id: req.session.user_id },
  });
  const posts = allPostsFromUser.map((post) => {
    return post.get({ plain: true });
  });
  logged_in = req.session.logged_in;
  //   console.log(posts);
  res.render("dashboard", { posts, logged_in });
});

router.get("/addPost", async (req, res) => {
  req.session.add_post = true;
  add_post = req.session.add_post;
  //find all posts where user_id is the same as the session
  const allPostsFromUser = await Post.findAll({
    where: { creator_id: req.session.user_id },
  });
  const posts = allPostsFromUser.map((post) => {
    return post.get({ plain: true });
  });
  logged_in = req.session.logged_in;
  res.render("dashboard", { posts, add_post, logged_in });
});

router.get("/edit/?", async (req, res) => {
  req.session.update_post = true;
  update_post = req.session.update_post;
  //find all posts where user_id is the same as the session
  const allPostsFromUser = await Post.findAll({
    where: { creator_id: req.session.user_id },
  });
  const posts = allPostsFromUser.map((post) => {
    return post.get({ plain: true });
  });
  logged_in = req.session.logged_in;
  res.render("dashboard", { posts, update_post, logged_in });
});

module.exports = router;
