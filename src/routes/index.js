const Router = require('koa-router')
const userRoutes = require('./user.routes')
const companyRoutes = require('./company.routes')
const jobRoutes = require('./job.routes')
const applicationRoutes = require('./application.routes')

const router = new Router({ prefix: '/api/v1' })

router.use(userRoutes.routes())
router.use(companyRoutes.routes())
router.use(jobRoutes.routes())
router.use(applicationRoutes.routes())

module.exports = router
