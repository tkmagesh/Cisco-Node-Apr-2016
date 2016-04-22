var querystring = require('querystring'),
	calculator = require('./calculator');
	
module.exports = function(req, res){
	if (req.url.pathname === '/calculator' && req.method === 'GET'){ // /calculator?op=add&n1=100&n2=200
		var op = req.url.query.op,
			n1 = parseInt(req.url.query.n1, 10),
			n2 = parseInt(req.url.query.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.url.pathname === '/calculator' && req.method === 'POST'){ // /calculator?op=add&n1=100&n2=200
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
	}
}