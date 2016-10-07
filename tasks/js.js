var templateCache = require('gulp-angular-templatecache');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var streamqueue = require('streamqueue');
var _ = require('lodash');
var notify = require('gulp-notify');
var notificationMessage = _.cloneDeep(require('./notifications'));
var config = require('./config');
var paths = config.paths();

var buildJs = function(gulp){
  console.log('Building JS Files . . .');
  notificationMessage.title = 'Building Scripts';
  notificationMessage.templateOptions.status = 'Script Building Successfull';
  var build = streamqueue({
      objectMode: true
    },
    gulp.src(paths.src.appJs),
    gulp.src(paths.src.html)
      .pipe(templateCache({
        module: config.appName
      })),
    gulp.src([paths.src.js, '!' + paths.src.appJs])
  );
  build.pipe(concat('app.built.js'))
    .pipe(gulp.dest(paths.dest.js))
    .pipe(notify(notificationMessage));
}

module.exports = buildJs;
