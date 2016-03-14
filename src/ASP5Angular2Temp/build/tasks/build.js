var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var embedTemplates = require('gulp-angular-embed-templates');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function () {
    return gulp.src(paths.source)
      .pipe(plumber())
         .pipe(embedTemplates({
             minimize: {
                 quotes: true,
                 dom: {
                     xmlMode: true,
                     lowerCaseAttributeNames: false,
                     lowerCaseTags: false
                 }
             },
             sourceType: 'ts'
         }))
      .pipe(changed(paths.output, { extension: '.js' }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(to5(assign({}, compilerOptions, { plugins: ["transform-es2015-modules-systemjs"] })))
      .pipe(sourcemaps.write({ includeContent: true }))
       //.pipe(concat('app.js'))
        //.pipe(rename('libs.min.js'))
        //.pipe(uglify())
      .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
        'clean',
      ['build-system','build-styles','libs','images','fonts'],
      callback
    );
});


