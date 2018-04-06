'use strict';

require('../../config/babel.register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var port = 3001;

setGlobalScope('window');
var routes = require('./server.routes');

app.set('views', path.join(__dirname, '../..', 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', routes);

app.listen(port, function (error) {
  error ? console.error(error) : console.info('==> \uD83C\uDF0E Proxy server listen on port ' + port + '.');
});

function setGlobalScope(scope) {
  global[scope] = {};
}