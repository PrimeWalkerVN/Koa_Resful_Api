const { hashPassword, comparePassword } = require('../services/utils.service')
const { generateJwt } = require('../services/jwt.service')

module.exports = {
  /**
   * @api {post} /signup
   * @apiGroup Users
   * @apiName signupUser
   * @apiParam {String} [email] user must need to provide the email
   * @apiParamExample {String} Request params:
   * {
   *  "email" : "test@gmail.com",
   *  "password": "123456"
   * }
   * @apiParam {String} [password] user must need to provide the password
   * @apiSuccess {String} Msg signup successful!
   * @apiSuccessExample {json} Signup success response:
   * HTTP/1.1 200OK
   * {
   *    "msg": "Signup Successful"
   * }
   */
  signUp: async (ctx) => {
    try {
      const { email, password } = ctx.request.body
      if (!email) ctx.throw(400, 'please provide the email')
      if (!password) ctx.throw(400, 'please provide the password')
      const encryptPassword = await hashPassword(password)
      ctx.body = await ctx.db.User.create({ email, password: encryptPassword })
    } catch (err) {
      ctx.throw(500, err)
    }
  },
  login: async (ctx) => {
    try {
      const { email, password } = ctx.request.body
      if (!email || !password)
        ctx.throw(400, 'Please provide email and password')
      const user = await ctx.db.User.findOne({ where: { email } })
      if (!user) {
        ctx.throw(400, 'Email not exist, try another')
      }
      const matched = await comparePassword(password, user.password)
      if (matched) {
        const token = await generateJwt({ id: user.id }, '1 day')
        ctx.body = { token }
      } else {
        ctx.throw(400, 'invalid password')
      }
    } catch (err) {
      ctx.throw(500, err)
    }
  },
}
