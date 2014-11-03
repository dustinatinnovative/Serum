var gulp 	= require('gulp'),
	prompt	= require('gulp-prompt'),
	plugins = require('gulp-load-plugins')();

// Require innovative/core from composer
module.exports = gulp.task('requireCore', function () {
	var questions = [{
			type: 'input',
			name: 'project_name',
			message: 'Project name?'
		},
		{
			type: 'input',
			name: 'core_version',
			message: 'Core version?',
			default: 'dev-master'
		}];

	return gulp.src('')
		.pipe(prompt.prompt(questions, function(answers) {

			stability = 'stable';
			if ( answers.core_version.indexOf('develop') > -1 ) {
				stability = 'dev';
			}

			return gulp.src('stubs/composer.stub')
				.pipe(plugins.replace(/PROJECT_NAME/g, answers.project_name))
				.pipe(plugins.replace(/CORE_VERSION/g, answers.core_version))
				.pipe(plugins.replace(/PROJECT_STABILITY/g, stability))
				.pipe(plugins.rename({ extname: '.json'}))
				.pipe(gulp.dest('./'));
		}));
});
