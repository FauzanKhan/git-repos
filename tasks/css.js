var notify = require('gulp-notify');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var compileSass = require('gulp-sass');
var _ = require('lodash');
var notificationMessage = _.cloneDeep(require('./notifications'));
var config = require('./config');

var buildCss = function(gulp){
	console.log('Building CSS Files . . .');
	var paths = config.paths();
	notificationMessage.title = 'SASS Compilation';
	notificationMessage.templateOptions.status = 'Compilation Sucessfull!';
	gulp.src(paths.src.css)
		.pipe(compileSass())
		.on('error', compileSass.logError)
		.pipe(concat('app.css'))
		.pipe(gulp.dest(paths.dest.css))
		.pipe(notify(notificationMessage));
		// .pipe(connect.reload());
}

module.exports = buildCss;
