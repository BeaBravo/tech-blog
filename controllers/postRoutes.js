const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  const postData = await Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: User }],
  });
  const post = postData.get({ plain: true });
  const allComments = await Comment.findAll({
    where: {
      post_id: req.params.id,
    },
    include: [{ model: User }],
  });
  const comments = allComments.map((comment) => comment.get({ plain: true }));
  logged_in = req.session.logged_in;
  res.render("post", { post, comments, logged_in });
});

module.exports = router;
