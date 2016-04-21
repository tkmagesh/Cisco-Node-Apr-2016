var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.xml', '.json'];
function isStatic(resource){
	return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
	console.log(req.method + ' - ' + req.url);
	req.url = req.url === '/' ? '/index.html' : req.url;
	var urlObj = url.parse(req.url, true);

	if (isStatic(urlObj.pathname)){
		var resourcePath = path.join(__dirname , urlObj.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){ // /calculator?op=add&n1=100&n2=200
		var op = urlObj.query.op,
			n1 = parseInt(urlObj.query.n1, 10),
			n2 = parseInt(urlObj.query.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){ // /calculator?op=add&n1=100&n2=200
		var reqData = '';
		req.on('data', function(chunk){
			reqData += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(reqData);
			var op = data.op,
				n1 = parseInt(data.n1, 10),
				n2 = parseInt(data.n2, 10);
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log('server listening on 8080!');

/*
16, 34-42 dataParsing
8-11, 18-26 - staticServerHanlder
26-47 - calculatorReqHandler
47-50 - notFoundHandler
*/