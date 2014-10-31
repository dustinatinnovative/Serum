var gulp 	= require('gulp'),
	shell	= require('gulp-shell');

// Set the local configs
module.exports = gulp.task('dump', function () {
	return gulp.src('')
		.pipe(shell('php artisan dump-autoload'));
});
