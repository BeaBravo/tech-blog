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
  if (post) {
    res.status(200).json(post.get({ plain: true }));
  } else {
    res.status(404).json("no post found under this id");
  }
});

//POST - create a new post
router.post("/", async (req, res) => {
  const newPost = await Post.create({
    ...req.body,
    creator_id: req.session.user_id,
  });
  res.status(200).json(newPost);
});

//PUT - edit a post
router.put("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  //if the user provided a new title -> update it
  if (req.body.post_title) {
    post.post_title = req.body.post_title;
  }
  //if the user provided an updated content -> update it
  if (req.body.post_content) {
    post.post_content = req.body.post_content;
  }
  await post.save();
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json("no post found under this id");
  }
});

//DELETE - delete a post
router.delete("/:id", async (req, res) => {
  const post = await Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json("Post deleted");
});

module.exports = router;
