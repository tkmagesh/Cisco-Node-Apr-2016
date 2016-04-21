var http = require('http');
var server = http.createServer(function(req, res){
	console.log(req.method + ' - ' + req.url);
	res.write('<h1>Welcome to Node.js</h1>');
	res.end();
	/*
	-- when resource not found
	res.statusCode = 404;
	res.end();
	*/
});
server.listen(8080);
console.log('server listening on 8080!');