const Router = require('koa-router')

const router = new Router({ prefix: '/users' })
const { UserController } = require('../controllers')

router.get('/', (ctx) => {
  ctx.body = 'get all users'
})
/**
 * @api {get} /user/:id Users unique ID.
 */
router.post('/signup', UserController.signUp)
router.post('/login', UserController.login)

module.exports = router
