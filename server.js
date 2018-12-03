var path = require('path');
var express = require('express');
var app = express();
//var data = require('./data');



app.use(express.static('public'));

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.status(200).render('index');
});

app.get('*', function (req, res) {
   res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(app.get('port'), function(){
  console.log('== server started on port 3000');
});
