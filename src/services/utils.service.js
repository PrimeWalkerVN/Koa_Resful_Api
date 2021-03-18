const bcrypt = require('bcrypt')

const Salt = 10
module.exports = {
  hashPassword: (password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return bcrypt.hashSync(password, Salt)
    } catch (error) {
      throw error
    }
  },
  comparePassword: (password, hash) => {
    // eslint-disable-next-line no-useless-catch
    try {
      return bcrypt.compareSync(password, hash)
    } catch (error) {
      throw error
    }
  },
}
