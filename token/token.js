const secret = require("../router/auth/middleware/secrets");
const jwt = require("jsonwebtoken");

function generatetoken(user) {
  const payload = {
    id: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "24h"
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = generatetoken;
