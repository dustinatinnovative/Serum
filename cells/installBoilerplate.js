var gulp 	= require('gulp'),
	git		= require('gulp-git'),
	shell	= require('gulp-shell');

// Set the local configs
module.exports = gulp.task('installBoilerplate', function () {
	return git.clone('https://github.com/innovative-media/gulp-public-boilerplate.git', function (err) {
		if (err) throw err;
		return gulp.src('')
			.pipe(shell([
				'rm -Rf gulp-public-boilerplate/.git gulp-public-boilerplate/.gitignore gulp-public-boilerplate/Gulpfile.* gulp-public-boilerplate/README.md gulp-public-boilerplate/bower.json gulp-public-boilerplate/package.json gulp-public-boilerplate/index.html.template',
				'mv public/index.php public/packages gulp-public-boilerplate/.',
				'rm -Rf public',
				'mv gulp-public-boilerplate public',
				'mkdir -p app/views/www; mv public/*.blade.php app/views/www/.',
				'mv public/routes.php app/routes.php'
			]));
	});
});
