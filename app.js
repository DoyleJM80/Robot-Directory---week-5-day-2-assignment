var express = require('express');
var mustacheExpress = require('mustache-express');
var data = require('./data.js');
var app = express();

app.use('/public', express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.get('/index', function (req, res) {
  var context = data;
  res.render('index', context);
});

app.get('/:id', function (req, res) {
  var user = {};
  for (var i = 0; i < data.users.length; i++) {
    user = data.users[i];
    if (user.id == req.params.id) {
      break;
    }
  }
  res.render('profile', user);
});

app.listen(3000, function () {
  console.log('listening');
});
//
