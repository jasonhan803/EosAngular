var express = require('express');
var app = express(),
    routes = require('./server/routes');

// some fancy middleware
app.use(express.static('public'));

// apply routing
routes(app);

var server = app.listen(process.env.PORT || 5155, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
