/*
Create an accumulator object with the following methods
	- add(x)
	- subtract(x)
	- multiply(x)
	- divide(x)
	- getResult()

var acc = require('./accumulator');
acc.add(100);
acc.subtract(50);
acc.multiply(10);
acc.divide(2);
console.log(acc.getResult()) // => 250

*/

var result= 0;
console.log('loading accumulator');
module.exports = {
	add : function(x){
		result += x;
	},
	subtract : function(x){
		result -= x;
	},
	multiply : function(x){
		result *= x;
	},
	divide : function(x){
		result /= x;
	},
	getResult : function(){
		return result;
	}
};