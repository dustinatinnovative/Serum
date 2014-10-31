var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();

// Set the local configs
module.exports = gulp.task('appConfig', function () {
	return gulp.src('stubs/app.stub')
		.pipe(plugins.rename({ extname: '.php'}))
		.pipe(gulp.dest('app/config'));
});
