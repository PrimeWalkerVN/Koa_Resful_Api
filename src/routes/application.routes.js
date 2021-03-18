const Router = require('koa-router')

const router = new Router({ prefix: '/applications' })

const { ApplicationController } = require('../controllers')

router.post('/', ApplicationController.create)
router.get('/', ApplicationController.find)
router.get('/:id', ApplicationController.findOne)
router.delete('/:id', ApplicationController.deleteOne)
router.put('/:id', ApplicationController.updateOne)
module.exports = router
