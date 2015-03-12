var express = require('express');
var app = express();
var parser = require('body-parser').urlencoded({ extended: false  });
var port = process.env.PORT || 3000;
var token = process.env.TOKEN || 'secretToken';

app.get('/', function (req, res) {
	res.send('Nothing here :O');
});

app.post('/', parser , function (req, res) {
	if(req.body.token === token){
		console.log(req.body);
		res.send('ok');
	} else {
		res.status(404).send('Bad token');
	}
});

app.listen(port, function () {
	console.log('Magic on port %s',  port);
});
