var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	req.url = req.url === '/' ? '/index.html' : req.url;
	req.url = url.parse(req.url, true);
	req.body = {};
	if (req.method === 'POST'){
		var reqData = '';
		req.on('data', function(chunk){
			reqData += chunk;
		});
		req.on('end', function(){
			var data = querystring.parse(reqData);
			req.body = data;
			next();
		});
	} else {
		next();	
	}
	
}