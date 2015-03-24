var gulp 		= require('gulp'),
	penthouse 	= require('penthouse'),
	fs 			= require('fs'),
	plugins 	= require('gulp-load-plugins')();

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
				errLogToConsole: true
			}))
		.pipe(plugins.sourcemaps.write('./maps', { addComment: false }))
		.pipe(gulp.dest(dest))
		.pipe(plugins.notify({
			message: '<%= file.relative %> compiled successfully',
			notifier: function(options, callback) { }
		}));
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
		.pipe(plugins.sourcemaps.write('./maps', { addComment: false }))
		.pipe(gulp.dest(dest))
		.pipe(plugins.notify({
			message: '<%= file.relative %> compiled successfully',
			notifier: function(options, callback) {}
		}));
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
		.pipe(plugins.newer(dest))
		.pipe(plugins.imagemin(options))
		.pipe(gulp.dest(dest))
		.pipe(plugins.notify({
			message: '<%= file.relative %> minified successfully',
			notifier: function(options, callback) {}
		}));
}

/**
 * doPixrem - Fallback to px unit for legacy browsers
 * @param  Array src     	Globs of src file patterns.
 * @param  String dest    	Path of stream destination
 * @param  Object options 	Options for rename
 * @return Object
 */
exports.doPixrem = function(src, dest, options) {
	options = typeof options !== 'undefined' ? options : {
		suffix: '-ie8'
	};

	return gulp.src(src)
		.pipe(plugins.pixrem())
		.pipe(plugins.rename(options))
		.pipe(gulp.dest(dest))
		.pipe(plugins.notify({
			message: '<%= file.relative %> pixremified successfully',
			notifier: function(options, callback) {}
		}));
};


exports.doPenthouse = function(url, src, dest){

	penthouse({
		url: url,
		css: src,
		width: 2560,
		height: 1440
	}, function (err, critical) {
		fs.writeFile(dest, critical);
	});

}