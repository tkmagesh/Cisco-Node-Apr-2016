var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
	dataParser(req, res);
	serveStatic(req, res);
	calculatorReqHandler(req, res);
	notFoundHandler(req, res);
});
server.listen(8080);
console.log('server listening on 8080!');
