const jwt = require('jsonwebtoken')

module.exports = {
  generateJwt: (payload, expiresIn) =>
    jwt.sign(payload, 'PrimeWalker', { expiresIn }),
  verify: (token) => jwt.verify(token, 'PrimeWalker'),
}
