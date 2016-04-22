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
		console.log('serving ' + req.url.pathname);

		var stream = fs.createReadStream(resourcePath);
		stream.on('data', function(chunk){
			console.log('writing file chunk');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('writing file to res completed');
			res.end();
		});


	}
}