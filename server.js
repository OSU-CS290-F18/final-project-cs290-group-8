var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(app.get('port'), function(){
  console.log('== server started on port 3000');
});
