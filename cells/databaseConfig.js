var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();

// Set the local configs
module.exports = gulp.task('databaseConfig', function () {
	return gulp.src('stubs/database.stub')
		.pipe(plugins.replace(/DB_NAME/g, global.answers.database_name))
		.pipe(plugins.replace(/DB_USER/g, global.answers.database_username))
		.pipe(plugins.replace(/DB_PASS/g, global.answers.database_password))
		.pipe(plugins.rename({ extname: '.php'}))
		.pipe(gulp.dest('app/config/local'));
});
