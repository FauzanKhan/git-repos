var config = require('./config');
var connect  = require('gulp-connect');

var  startServer = function(gulp){
	console.log('Starting Server . . .');
	var paths = config.paths();
	gulp.src(paths.root + '/public')
		.pipe(connect.server({
				root: ['../dist', '.', '../'],
				port: config.port,
				base: config.devBaseUrl,
				livereload: true
			}));
}

module.exports = startServer;
