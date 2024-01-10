const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// api/users endpoint

// GET all users with their posts and comments
router.get("/", async (req, res) => {
  const allUsers = await User.findAll({
    include: [
      { model: Post, as: "posts" },
      { model: Comment, as: "comments" },
    ],
  });
  res.status(200).json(allUsers);
});

module.exports = router;
