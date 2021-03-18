require('dotenv').config()
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const Koa = require('koa')
const serve = require('koa-static')
const routes = require('./routes')
const { port } = require('./config')

const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(helmet())

const db = require('./db/models')

db.sequelize
  .sync()
  .then(() => console.log('models synced'))
  .catch((err) => console.log(err))

app.context.db = db

app.use(routes.routes())
app.use(serve(`${__dirname}/public/`))

app.listen(port, () => {
  console.log(`✅  The server is running at http://localhost:${port}/`)
})
