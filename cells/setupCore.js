var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();

// Setup innovative/core for immediate use
module.exports = gulp.task('setupCore', function () {

	// app/config/app.php
	// PROJECT_DOMAIN
	gulp.src('app/config/app.php')
		.pipe(plugins.replace(/PROJECT_DOMAIN/g, global.answers.project_domain))
		.pipe(gulp.dest('app/config/app.php'));

	// app/config/local/database.php
	// DATABASE_NAME
	// DATABASE_USER
	gulp.src('app/config/local/database.php')
		.pipe(plugins.replace(/DATABASE_NAME/g, global.answers.database_name))
		.pipe(plugins.replace(/DATABASE_USER/g, global.answers.database_username))
		.pipe(gulp.dest('app/config/local/database.php'));

	// .env.php
	// SET_DATABASE_PASSWORD
	gulp.src('.env.template')
		.pipe(plugins.replace(/SET_DATABASE_PASSWORD/g, global.answers.database_password))
		.pipe(gulp.dest('.env.php'));

	// composer.json
	// PROJECT_NAME
	gulp.src('composer.json')
		.pipe(plugins.replace(/PROJECT_NAME/g, global.answers.project_name))
		.pipe(gulp.dest('composer.json'));
});
