const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Post, Comment } = require("../../models");

//POST - create a new comment

router.post("/", withAuth, async (req, res) => {
  const newComment = await Comment.create({
    comment: req.body.comment,
    creator_id: req.session.user_id,
    post_id: req.body.post_id,
  });
  res.status(200).json(newComment);
});

module.exports = router;
