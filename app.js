var express = require('express');
var app = express();
var parser = require('body-parser').urlencoded({ extended: false  });
var port = process.env.PORT || 3000;
var token = process.env.TOKEN || 'DJILKeK9aJPySkox3wXSK0Bb' || 'secretToken';

app.get('/', function (req, res) {
	res.send('Nothing here :O');
});

app.post('/', parser , function (req, res) {
	if(req.body.token === token){

		// callback to be called on done()
		var callback = function(data){
			// the response is the executed code and the logs joined
			var response = code +'\n-> ' + logs.join('\n');
			console.log(response)
			res.status(200).send(response);
		};

		// get user code to execute
		var code = req.body.text;

		var logs = [];
		// reduce scope of the evaluated function
		(function(process){
			// custom log function to be used
			log = function(a){
				console.log('console : ' + a);
				logs.push(a);
			};
			// catch errors
			try{
				(new Function("done", code))(callback); // Perform the call
			} catch(e){
				res.status(500).send('Error : ' + code + '\n' +e);
			}
		})();

		// Need <code> encoding and format check, callback malformed data check, and timeout if log() is never called
	} else {
		res.status(404).send('Bad token');
	}
});

app.listen(port, function () {
	console.log('Magic on port %s',  port);
});
