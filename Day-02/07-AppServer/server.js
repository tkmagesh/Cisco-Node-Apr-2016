var http = require('http'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app');

app.use(dataParser);
app.use(serveStatic);
app.use(calculatorReqHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log('server listening on 8080!');