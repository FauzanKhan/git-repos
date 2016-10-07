var gulp = require('gulp');
var _ = require('lodash');
var tasks = require('./tasks');

_.forEach(tasks, function(task, taskName){
	var beforeRun = task.beforeRun || [];
	gulp.task(taskName, beforeRun, function(){
		task.fn(gulp);
	});
});

gulp.task('default', ['bower', 'html', 'css', 'js', 'serve', 'watch']);

gulp.task('build:serve', ['bower', 'html', 'css', 'js', 'serve']);
