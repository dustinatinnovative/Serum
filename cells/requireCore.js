var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();

// Require innovative/core from composer
module.exports = gulp.task('requireCore', function () {

	stability = 'stable';
	if ( global.answers.core_version.indexOf('develop') > -1 ) {
		stability = 'dev';
	}

	return gulp.src(__dirname + '/../stubs/composer.stub')
		.pipe(plugins.replace(/PROJECT_NAME/g, global.answers.project_name))
		.pipe(plugins.replace(/CORE_VERSION/g, global.answers.core_version))
		.pipe(plugins.replace(/PROJECT_STABILITY/g, stability))
		.pipe(plugins.rename({ extname: '.json'}))
		.pipe(gulp.dest('./'));
});
