var path = require('path');
var exphbs = require('express-handlebars');
var express = require('express');
var app = express();
var data = require('./data');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.status(200).render('index');
});

app.get('*', function (req, res) {
   res.status(200).render('404');
});

app.listen(app.get('port'), function(){
  console.log('== server started on port 3000');
});
