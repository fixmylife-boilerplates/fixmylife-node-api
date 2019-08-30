const db = require("../../database/dbConfig");

module.exports = {
  add,
  remove,
  update,
  getUserPosts,
  getAllPosts,
  findById
};

function getAllPosts() {
  return db("posts")
    .join("users", "posts.user_id", "=", "users.id")
    .select(
      { username: "users.username" },
      "user_id",
      "users.avatar",
      { post_id: "posts.id" },
      "image",
      "description",
      "posts.created_at",
      "posts.updated_at"
    );
}

function findById(id) {
  return db("posts")
    .where("posts.id", id)
    .first()
    .join("users", "posts.user_id", "=", "users.id")
    .select(
      { username: "users.username" },
      "user_id",
      "users.avatar",
      { post_id: "posts.id" },
      "image",
      "description",
      "posts.created_at",
      "posts.updated_at"
    );
}

function getUserPosts(id) {
  return db("posts")
    .where("posts.user_id", id)
    .join("users", "posts.user_id", "=", "users.id")
    .select(
      { username: "users.username" },
      "user_id",
      "users.avatar",
      { post_id: "posts.id" },
      "image",
      "description",
      "posts.created_at",
      "posts.updated_at"
    );
}

async function add(post) {
  const [id] = await db("posts").insert(post, "id");

  return findById(id);
}

function remove(id) {
  return db("posts")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("posts")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}
