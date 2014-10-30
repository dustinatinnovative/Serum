var gulp 	= require('gulp'),
	plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

/**
 * Compile Scss
 * @param  String src 	Glob of src path
 * @param  Array paths 	Paths to include for Scss @import
 * @param  String dest 	Path of stream destination
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