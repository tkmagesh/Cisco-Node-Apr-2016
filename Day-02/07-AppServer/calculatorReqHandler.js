var querystring = require('querystring'),
	calculator = require('./calculator');
	
module.exports = function(req, res, next){
	if (req.url.pathname === '/calculator'){ // /calculator?op=add&n1=100&n2=200
		var data = req.method === 'GET' ? req.url.query : req.body;
		var op = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}