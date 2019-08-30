const db = require("../../database/dbConfig");

module.exports = {
  getUsers,
  findById,
  update,
  remove
};

function getUsers() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first()
    .select("id", "username", "email", "avatar", "created_at", "updated_at");
}

function update(id, changes) {
  return db("users")
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

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}


