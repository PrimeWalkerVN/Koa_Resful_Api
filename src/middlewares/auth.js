const { verify } = require('../services/jwt.service')

module.exports = async (ctx, next) => {
  let token = ''
  if (ctx.req.headers && ctx.req.headers.authorization) {
    token = ctx.req.headers.authorization.replace(/^Bearer\s+/, '')
  } else {
    ctx.throw(401, 'Authorization header is missing')
  }
  const decodedToken = verify(token)
  console.log(decodedToken)
  const user = await ctx.db.User.findOne({
    where: {
      id: decodedToken.id,
    },
  })
  if (user) {
    ctx.state.user = user.id
    await next()
  } else ctx.throw(401, 'Unauthorized')
}
