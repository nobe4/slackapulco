var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.send('Hello World!');
});

var server = app.listen(3000, function () {
	console.log('Magic on port %s',   server.address().port);
});
