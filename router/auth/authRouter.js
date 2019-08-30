const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Auth = require("./authModel");
const generateToken = require("../../token/token");
const { checkIfUserExist } = require("../users/middleware");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  user.avatar =
    "https://github.com/brokenulock/frontend/blob/master/src/bulfmlimg/default-avatar.png?raw=true";

  Auth.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res
        .status(500)
        .json({
          error,
          message: "user might already exist with that username or email."
        });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Auth.findBy({ username })
    .first()
    .then(user => {
      const token = generateToken(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          message: `welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentails" });
      }
    })
    .catch(error => {
      res.status(500).json({ error, message: "error user might not exist" });
    });
});

router.post("/firebase", checkIfUserExist, (req, res) => {
  let { email } = req.body;

  Auth.findBy({ email })
    .first()
    .then(user => {
      const token = generateToken(user);

      res.status(200).json({
        message: `welcome back ${user.username}!`,
        user,
        token
      });
    })
    .catch(error => {
      res.status(500).json({ error, message: "error user might not exist" });
    });
});

module.exports = router;
