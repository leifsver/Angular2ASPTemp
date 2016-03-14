
var gulp = require('gulp');
var paths = require('../paths');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


var libs = [
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js',
   paths.npmSrc + '/es6-shim/es6-shim.min.js',

   paths.bowerSrc + '/bootstrap/dist/bootstrap.js',
   paths.bowerSrc + '/jquery/dist/jquery.js'
];


gulp.task('libs', function () {
    return gulp.src(libs)
      .pipe(concat('libs.js'))
        //.pipe(rename('libs.min.js'))
        //.pipe(uglify())
    .pipe(gulp.dest(paths.outputLibs));
});