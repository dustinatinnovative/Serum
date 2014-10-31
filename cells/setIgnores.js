var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();

// Set the local configs
module.exports = gulp.task('setIgnores', function () {
	return gulp.src('stubs/gitignore.stub')
		.pipe(plugins.rename('.gitignore'))
		.pipe(gulp.dest('./'));
});
