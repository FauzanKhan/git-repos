var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var notify = require('gulp-notify');
var _ = require('lodash');
var notificationMessage = _.cloneDeep(require('./notifications'));
var config = require('./config');


var buildVendorFiles = function(gulp){
  console.log("Building Vendor files");
  var paths = config.paths();
  notificationMessage.title = "Bower Files Compilation";
  notificationMessage.templateOptions.status = "Bower files compilation successfull!";
  // Concat Css Vendor Files
  gulp.src(mainBowerFiles().filter(function(file){
    return file.indexOf('.css') > -1;
    })).pipe(concat('vendor.css'))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(notify(notificationMessage));
    // .pipe(connect.reload())

  // Concat Js Vendor Files
  gulp.src(mainBowerFiles().filter(function(file){
    return file.indexOf('.js') > -1;
    })).pipe(concat('vendor.js'))
    .pipe(gulp.dest(paths.dest.js))
    .pipe(notify(notificationMessage));
    // .pipe(connect.reload())
}

module.exports = buildVendorFiles;
