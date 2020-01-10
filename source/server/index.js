require('dotenv').config()
require('../../config/babel.register')

setGlobalScope('window')

const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const favicon = require('koa-favicon')

const router = require('./config.router')
const { port } = require('./config.base')

const app = new Koa()

app.use(favicon())
app.use(serve(path.join(__dirname, '../..','public')))
app.use(views(path.join(__dirname, '../..', '/views'), { extension: 'pug' }))
app.use(bodyParser({ jsonLimit: '56kb' }))
app.use(router.routes())


app.listen(port, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎  Listening on port ${port}.`)
})

function setGlobalScope(scope) {
  global[scope] = {}
}
