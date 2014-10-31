var gulp 	= require('gulp'),
	shell	= require('gulp-shell');

// Set the local configs
module.exports = gulp.task('provisionCoreDB', function () {
	return gulp.src('')
		.pipe(shell('php artisan key:generate'))
		.pipe(shell('php artisan migrate --package="innovative/core"'))
		.pipe(shell('php artisan db:seed --class="InnovativeCoreSeeder"'));
});
