var gulp = require('gulp');
var paths = require('../paths');

gulp.task('fonts', function () {
    return gulp.src(paths.fontPaths)

		.pipe(gulp.dest(paths.outputFonts));
});