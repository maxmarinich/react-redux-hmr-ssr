const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || '4000';

const app = express();

setGlobalScope('window');

app.set('views', path.join(__dirname, '../..','views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../..','public')));
app.use('/', require('./server.routes'));

app.listen(port, error => {
  error ? console.error(error) : console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});

function setGlobalScope(scope) {
  global[scope] = {};
}
