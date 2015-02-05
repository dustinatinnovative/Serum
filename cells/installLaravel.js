var gulp 	= require('gulp'),
	git		= require('gulp-git'),
	shell	= require('gulp-shell');

// Install the laravel filesystem
module.exports = gulp.task('installLaravel', function () {
	return gulp.src('')
		.pipe(shell([
			'composer create-project --no-install --no-scripts laravel/laravel tmp ~4.2',
			'mv tmp/* tmp/.[^.]* .',
			'rm -Rf tmp'
		]));
});
