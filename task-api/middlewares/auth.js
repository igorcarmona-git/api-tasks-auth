const jwt = require('jsonwebtoken');

const secret = "qualquer_coisa"

const createToken = (obj) => {
    return jwt.sign(obj, secret, {algorithm:"HS256"})
}

const validToken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = { createToken, validToken }