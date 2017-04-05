var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers'));
app.use(express.static('./client/build'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});