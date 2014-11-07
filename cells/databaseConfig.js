var gulp 	= require('gulp'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace');

// Set the local configs
module.exports = gulp.task('databaseConfig', function () {
	return gulp.src(__dirname + '/../stubs/database.stub')
		.pipe(replace(/DB_NAME/g, global.answers.database_name))
		.pipe(replace(/DB_USER/g, global.answers.database_username))
		.pipe(replace(/DB_PASS/g, global.answers.database_password))
		.pipe(rename({ extname: '.php'}))
		.pipe(gulp.dest('app/config/local'));
});
