var config = require('./config');
var open = require('gulp-open');

var openIndexFile = function(gulp){
	console.log('Opening Index . . .')
	gulp.src('../dist/index.html')
		.pipe( open('../dist/index.html',  {url: config.devBaseUrl+':'+config.port + '/' } ) );
}

module.exports = openIndexFile;
