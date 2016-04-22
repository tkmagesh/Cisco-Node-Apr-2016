var fs = require('fs'),
	path = require('path');

var staticResourceExtns = ['.html', '.js', '.css', '.png', '.jpg', '.xml', '.json'];
function isStatic(resource){
	return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.url.pathname)){
		var resourcePath = path.join(__dirname , req.url.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	}
}