const router = require("express").Router();

const Posts = require("./postsModel");
const restricted = require("../auth/middleware/restrictedMiddleware");
const {
  verifyPostOwner,
  prepNewPost,
  verifyPostExist
} = require("./middleware");

router.get("/", (req, res) => {
  Posts.getAllPosts()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res
        .status(500)
        .json({ req, error, message: "error retrieving all posts" });
    });
});

router.get("/:id", verifyPostExist, (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res
        .status(500)
        .json({ err, message: "we ran into an error retreving the user" });
    });
});

router.post("/", restricted, prepNewPost, (req, res) => {
  const post = req.body;
  Posts.add(post)
    .then(inserted => {
      res.status(201).json(inserted);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error, message: "we ran into an error posting your tab" });
    });
});

router.put("/:id", restricted, verifyPostOwner, (req, res) => {
  Posts.update(req.params.id, req.body)
    .then(update => {
      res.status(201).json(update);
    })
    .catch(err => {
      res.status(500).json({ err, message: "error updating your post" });
    });
});

router.delete("/:id", restricted, verifyPostOwner, (req, res) => {
  Posts.remove(req.params.id)
    .then(del => {
      res
        .status(200)
        .json({ message: "the post has successfully been deleted" })
        .end(del);
    })
    .catch(err => {
      res.status(500).json({ err, message: "this post does not exist" });
    });
});

module.exports = router;
