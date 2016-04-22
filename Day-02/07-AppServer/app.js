var _middlewares = [];

function exec(req, res, fns){
	var first = fns[0],
		remaining = fns.slice(1),
		next = function(){
			exec(req, res, remaining);
		};
		if (typeof first === 'function'){
			first(req, res, next);
		}
}

var app = function(req, res){
	exec(req, res, _middlewares);
};

app.use = function(middleware){
	_middlewares.push(middleware);
}

module.exports = app;