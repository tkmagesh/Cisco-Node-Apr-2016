var express = require('express');
var router = express.Router();

/* GET home page. */

var taskList = [
	{id : 1, name : 'Plan for vacation', isCompleted : false},
	{id : 2, name : 'Watch Jungle Book', isCompleted : true},
	{id : 3, name : 'Fix that bug', isCompleted : false}
]

router.get('/', function(req, res, next) {
	var viewData = {
		list :  taskList
	};
  	res.render('tasks/list', viewData);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTask = {
		id : taskList.reduce(function(result, task){
			return result > task.id ? result : task.id
		},0)+1,
		name : req.body.taskname,
		isCompleted : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
}); 

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id, 10);
	var task = taskList.filter(function(task){
		return task.id === taskId
	})[0];
	if (task)
		task.isCompleted = !task.isCompleted;
	res.redirect('/tasks');
});

module.exports = router;