var express = require('express');
var app = express();

// some fancy middleware
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

var server = app.listen(process.env.PORT || 5155, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
