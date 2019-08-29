const Users = require("../usersModel");

module.exports = {
  verifyUserExist
};


async function verifyUserExist(req, res, next) {
  try {
    const { id } = await Users.findById(req.params.id);
    id ? next() : res.status(400).json({ message: "No by with that ID" });
  } catch (err) {
    res.status(400).json({ message: "No user by that ID" });
  }
}


