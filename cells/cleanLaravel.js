var gulp 	= require('gulp'),
	shell	= require('gulp-shell');

// Set the local configs
module.exports = gulp.task('cleanLaravel', function () {
	return gulp.src('')
		.pipe(shell([
			'rm -Rf app/controllers app/models app/commands CONTRIBUTING.md app/views/hello.php',
			'mkdir -p app/views/generated',
			'mkdir -p uploads',
			'chmod 777 -R uploads app/views/generated app/storage'
		]));
});
