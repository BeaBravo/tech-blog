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

router.post("/login", async (req, res) => {
  try {
    //find the user with the username
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    console.log(userData);
    //create a session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route for loging out
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
