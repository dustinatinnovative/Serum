var gulp 	= require('gulp'),
	shell	= require('gulp-shell'),
	plugins = require('gulp-load-plugins')();

// Set the local configs
module.exports = gulp.task('setMachine', function () {
	return gulp.src('bootstrap/start.php')
		.pipe(plugins.replace(/homestead/g, 'devlocal'))
		.pipe(gulp.dest('bootstrap'));
});
