const router = require("express").Router();

const Users = require("./usersModel");
const Posts = require("../posts/postsModel");
const restricted = require("../auth/middleware/restrictedMiddleware");
const { verifyUserExist } = require("./middleware");

router.get("/all", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ err, message: "Cannot retrieve users from database." });
    });
});

router.get("/", restricted, (req, res) => {
  Users.findById(req.decodedToken.id)
    .then(user => {
      Posts.getUserPosts(req.decodedToken.id)
        .where({ user_id: req.decodedToken.id })
        .then(posts => {
          if (!posts) {
            user.posts = [];
            return res.status(200).json(user);
          } else {
            user.posts = posts;
            return res.status(200).json(user);
          }
        })
        .catch(err => {
          res.status(200).json(err);
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ err, message: "we ran into an error retreving the user" });
    });
});

router.get("/:id", verifyUserExist, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      Posts.getUserPosts(req.params.id)
        .where({ user_id: req.params.id })
        .then(posts => {
          if (!posts) {
            user.posts = [];
            return res.status(200).json(user);
          } else {
            user.posts = posts;
            return res.status(200).json(user);
          }
        })
        .catch(err => {
          res.status(200).json(user);
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ err, message: "we ran into an error retreving the user" });
    });
});

router.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Users.update(id, changes)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: error
      });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const user = req.decodedToken;
  if (req.decodedToken.id == req.params.id) {
    Users.remove(req.params.id)
      .then(del => {
        res
          .status(200)
          .json({
            user,
            message: `User:${user.username} was successfully deleted`
          })
          .end(del);
      })
      .catch(err => {
        res.status(500).json({ err, message: "error, unable to delete user" });
      });
  } else {
    res.status(400).json({
      user,
      message: "you are not able to delete another users account"
    });
  }
});

router.delete("/", restricted, (req, res) => {
    Users.remove(req.decodedToken.id)
      .then(del => {
        res
          .status(200)
          .json({
            message: `User was successfully deleted`
          })
          .end(del);
      })
      .catch(err => {
        res.status(500).json({ err, message: "error, unable to delete user" });
      });
  
  
});

module.exports = router;
