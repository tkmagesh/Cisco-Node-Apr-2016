//argv[0]	argv[1]			argv[2]
//node 		printFile.js 	test.txt

var fs = require('fs');
var fileName = process.argv[2];
if (!fileName){
	console.log("Invalid usage");
	return;
}
if (!fs.existsSync(fileName)){
	console.log('file not found');
	return;
}
var readCount = 0;
var stream = fs.createReadStream(fileName, {encoding : 'utf8'});
//open, data, end, close, error
/*stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});

stream.on('end', function(){
	console.log('================= EOF ================');
	console.log('concluded with ' + readCount + ' reads!');
});*/

stream.pipe(process.stdout);
stream.on('data', function(chunk){
	++readCount;
});
stream.on('end', function(){
	console.log('================= EOF ================');
	console.log('concluded with ' + readCount + ' reads!');
});