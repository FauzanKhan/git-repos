var webserver = require('gulp-webserver');
var _ = require('lodash');
var notify = require('gulp-notify');
var notificationMessage = _.cloneDeep(require('./notifications'));
var config = require('./config');

var serve = function(gulp){
	console.log('Starting Server . . .');
	var paths = config.paths();
	notificationMessage.title = 'Gulp server started on ' + config.devBaseUrl + ':' + config.port;
	notificationMessage.message = config.devBaseUrl + ':' + config.port;
	gulp.src('./dist')
		.pipe(webserver({
	        host: config.devBaseUrl,
	        port: config.port,
		    fallback: 'index.html',
		}))
		.pipe(notify(notificationMessage));
}

module.exports = serve;
