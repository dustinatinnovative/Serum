var gulp 	= require('gulp'),
	git		= require('gulp-git'),
	shell	= require('gulp-shell');

// Install the laravel filesystem
module.exports = gulp.task('composerUpdate', function () {
	return gulp.src('')
		.pipe(shell('composer update'));
});
