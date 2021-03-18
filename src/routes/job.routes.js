const Router = require('koa-router')

const router = new Router({ prefix: '/jobs' })

const { JobController } = require('../controllers')

router.post('/', JobController.create)
router.get('/', JobController.find)
router.get('/:id', JobController.findOne)
router.delete('/:id', JobController.deleteOne)
router.put('/:id', JobController.updateOne)
module.exports = router
