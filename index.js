var gulp 	= require('gulp'),
	prompt	= require('gulp-prompt'),
	shell	= require('gulp-shell'),
	plugins = require('gulp-load-plugins')(),
	requireDir = require('require-dir'),
	Serum = requireDir('./cells'),
	questions = require('./lib/questions'),
	runSequence = require('run-sequence').use(gulp);

/**
 * doScss - Compile Scss
 * @param  Array src 		Globs of src file patterns.
 * @param  Array paths 		Paths to include for Scss @import.
 * @param  String dest 		Path of stream destination.
 * @return Object
 */
exports.doScss = function(src, paths, dest) {
	return gulp.src(src)
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				includePaths: paths,
				outputStyle: 'compressed',
				errLogToConsole: true,
				onSuccess: function(){ console.log('SCSS compiled') }
			}))
		.pipe(plugins.sourcemaps.write('./maps'))
		.pipe(gulp.dest(dest));
};

/**
 * doJs - Compile Javascript
 * @param  Array src		Globs of src file patterns.
 * @param  String name 		Name of output file.
 * @param  String dest 		Path of stream destination.
 * @return Object
 */
exports.doJs = function(src, name, dest) {
	return gulp.src(src)
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.concat( name + '.js', {newLine: ';'}))
			.pipe(plugins.rename({ basename: name, suffix: '.min'}))
			.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write('./maps'))
		.pipe(gulp.dest(dest));
};

/**
 * doImages - Optimize Images
 * @param  Array src 		Globs of src file patterns.
 * @param  String dest 		Path of stream destination.
 * @param  Object options 	Imagemin Options.
 * @return Object
 */
exports.doImages = function(src, dest, options) {
	options = typeof options !== 'undefined' ? options : {
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	};

	return gulp.src(src)
		.pipe(plugins.imagemin(options))
		.pipe(gulp.dest(dest));
}

/**
 * coreInstall - Do a base install of core, clean up laravel, and otherwise get ready to code!
 */
module.exports = gulp.task('core-install', ['coreQuestions'], function() {
	return runSequence('databaseConfig','appConfig','setMachine','setIgnores','provisionCoreDB','installBoilerplate','cleanLaravel','dump','publish');
})

gulp.task('coreQuestions', function() {
	return gulp.src('')
		.pipe(plugins.prompt.prompt(questions, function(answers) {
			var answers = answers;
		}))
		.pipe(gulp.dest(''))
})