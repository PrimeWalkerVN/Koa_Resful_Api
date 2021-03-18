const Router = require('koa-router')

const router = new Router({ prefix: '/companies' })

const { CompanyController } = require('../controllers/index')
const auth = require('../middlewares/auth')

router.post('/', auth, CompanyController.create)
router.get('/', auth, CompanyController.find)
router.get('/:id', auth, CompanyController.findOne)
router.delete('/:id', auth, CompanyController.deleteOne)
router.put('/:id', auth, CompanyController.updateOne)
module.exports = router
