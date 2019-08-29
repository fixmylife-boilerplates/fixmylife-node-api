const Posts = require("../postsModel");

module.exports = {
  verifyPostOwner,
  prepNewPost,
  verifyPostExist
};

function prepNewPost(req, res, next) {
  if (req.body.description) {
    req.body.user_id = req.decodedToken.id
    next();
  } else {
    res.status(400).json({ message: "Posts must contain a description" });
  }
}

async function verifyPostOwner(
  req,
  res,
  next
) {
  try {
    const { user_id } = await Posts.findById(req.params.id);
    user_id === req.decodedToken.id
      ? next()
      : res.status(400).json({ message: "User does not own that post" });
  } catch (err) {
    // console.log("No post at ID: delete");
    res.status(400).json({ message: "No post with that ID" });
  }
}

async function verifyPostExist(
  req,
  res,
  next
) {
  try {
    const { user_id } = await Posts.findById(req.params.id);
    user_id
      ? 
      next()
      : res.status(400).json({ message: "No post with that ID" });
  } catch (err) {
    res.status(400).json({ message: "No post with that ID" });
  }
}
