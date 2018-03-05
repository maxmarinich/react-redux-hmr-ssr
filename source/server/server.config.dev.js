require('babel-core/register')

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3001

setGlobalScope('window')
const routes = require('./server.routes')

app.set('views', path.join(__dirname, '../..','views'))
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/', routes)

app.listen(port, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎  Proxy server listen on port ${port}.`)
})

function setGlobalScope(scope) {
  global[scope] = {}
}
