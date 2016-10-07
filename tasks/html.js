var config = require('./config');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');

var buildHtml = function(gulp){
	console.log('Building HTML Files . . .');
	var paths = config.paths();
	gulp.src(paths.src.indexHtml)
		.pipe(gulp.dest(paths.dest.indexHtml))
		.pipe(connect.reload());
}

module.exports = buildHtml;
