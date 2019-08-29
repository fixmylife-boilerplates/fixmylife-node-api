const jwt = require("jsonwebtoken")
const secrets = require("./secrets")

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({err, message: "please log in"});
        } else {
            req.decodedToken = decodedToken;
            next()
        }
    })
}