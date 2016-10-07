var config = require('./config');

var watchFiles = function(gulp){
	console.log('Watching Files . . .');
	var paths = config.paths();
	gulp.watch(paths.src.html, ['html', 'js']);
	gulp.watch(paths.src.indexHtml, ['html']);
	gulp.watch(paths.src.scss, ['css']);
	gulp.watch(paths.src.js, ['js']);
}

module.exports = watchFiles;
