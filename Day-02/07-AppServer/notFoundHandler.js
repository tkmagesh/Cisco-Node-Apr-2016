module.exports = function(req, res){
	console.log('writing 404');
	res.statusCode = 404;
	res.end();
}