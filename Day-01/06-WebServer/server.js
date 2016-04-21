var http = require('http');
var fs = require('fs')
var path = require('path');

var server = http.createServer(function(req, res){
	console.log(req.method + ' - ' + req.url);
	req.url = req.url === '/' ? '/index.html' : req.url;
	var resourcePath = path.join(__dirname , req.url);
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resourcePath).pipe(res);
});
server.listen(8080);
console.log('server listening on 8080!');