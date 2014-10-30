var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

/**
 * doScss - Compile Scss
 * @param  Array src 		Globs of src path.
 * @param  Array paths 		Paths to include for Scss @import.
 * @param  String dest 		Path of stream destination.
 * @return Object
 */
exports.doScss = function(src, paths, dest) {
	return gulp.src(src)
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.sass({
				includePaths: paths,
				outputStyle: 'compressed'
			}))
		.pipe(plugins.sourcemaps.write('./maps'))
		.pipe(gulp.dest(dest));
};

/**
 * doJs - Compile Javascript
 * @param  Array src		Globs of src paths.
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