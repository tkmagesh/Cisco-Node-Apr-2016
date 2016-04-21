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
fs.readFile(fileName, {encoding :'utf8'}, function(err, fileContents){
	if (err){
		console.log(err);
		return;
	}
	console.log(fileContents);
	console.log('================= EOF ================');
});
