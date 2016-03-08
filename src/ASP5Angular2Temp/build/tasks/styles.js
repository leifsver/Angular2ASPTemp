var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths');
var concat = require('gulp-concat');

gulp.task('build-styles', function () {
    return gulp.src(paths.style)
      .pipe(sass().on('error', sass.logError))
       .pipe(concat('app.css'))
      .pipe(gulp.dest(paths.outputStyles));
});