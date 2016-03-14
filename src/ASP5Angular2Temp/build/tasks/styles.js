var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var minify = require('gulp-minify-css');

gulp.task('build-styles', function () {
    //return gulp.src(paths.style)
    //  .pipe(sass().on('error', sass.logError))
    //   .pipe(concat('app.css'))
    //  .pipe(gulp.dest(paths.outputStyles));

    var scssStream = gulp.src(paths.scss)
    .pipe(sass())
    .pipe(concat('scss-files.scss'))
    ;

    var cssStream = gulp.src(paths.css)
    .pipe(concat('css-files.css'))
    ;

    var mergedStream = merge(scssStream, cssStream)
      .pipe(concat('app.css'))
      .pipe(minify())
      .pipe(gulp.dest(paths.outputStyles));

    return mergedStream;
});