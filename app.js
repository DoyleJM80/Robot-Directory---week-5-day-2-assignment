var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
var data = require('./data.js');

app.use('/public', express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/index', function (req, res) {
  var context = data;
  res.render('index', context);
});

app.listen(3000, function () {
  console.log('listening');
});
//
