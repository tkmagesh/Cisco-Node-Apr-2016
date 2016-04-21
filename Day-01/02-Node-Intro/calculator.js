/*
	Create a calculator object with the following methods
		- add(x,y)
		- subtract(x,y)
		- multiply(x,y)
		- divide(x,y)

	print the results of all the above methods for x = 100 and y = 50
*/

var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	}
}
console.log(calculator.add(100,50));
console.log(calculator.subtract(100,50));
console.log(calculator.multiply(100,50));
console.log(calculator.divide(100,50));
