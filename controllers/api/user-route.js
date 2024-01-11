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

//POST - to create a new user
router.post("/", async (req, res) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  //create a session for new user
  req.session.save(() => {
    req.session.logged_in = true;
    req.session.user_id = newUser.id;
    console.log("New user created: ", newUser);
    res.status(200).json(newUser);
  });
});

//POST - creates a new session with an existing user
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

//POST - route for loging out
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
