const Router = require('koa-router')

const router = new Router({ prefix: '/applications' })

const { ApplicationController } = require('../controllers')

router.post('/', ApplicationController.create)
router.get('/', ApplicationController.find)
module.exports = router
