'use strict';

/*
* comment out for css-modules support
*
* require('../../config/babel.register')
* */

require('../../config/babel.register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || '4000';

var app = express();

setGlobalScope('window');

app.set('views', path.join(__dirname, '../..', 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../..', 'public')));
app.use('/', require('./server.routes'));

app.listen(port, function (error) {
  error ? console.error(error) : console.info('==> \uD83C\uDF0E  Listening on port ' + port + '. Open up http://localhost:' + port + '/ in your browser.');
});

function setGlobalScope(scope) {
  global[scope] = {};
}