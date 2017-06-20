var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
var data = require('data.js');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/', function (req, res) {
  res.send(data);
});

app.listen(3000, function () {
  console.log('listening');
});
