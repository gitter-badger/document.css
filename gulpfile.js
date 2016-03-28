var gulp = require('gulp'), // require gulp
	argv = require('yargs').argv, // yargs is used to take arguments on tasks
	browserSync = require('browser-sync'), // like livereload but better, and with a development server built-in
	gulpLoadPlugins = require('gulp-load-plugins'), // load all gulp plugins in node_modules
	plg = gulpLoadPlugins(); // plugins are now useable via the plg object (e.g. plg.concat)

gulp.task('default', function() {
	var source = ['./basic.scss'];
	if (argv.dist) { // run if --dist flag is present
		return gulp.src(source)
			.pipe(plg.plumber())
			.pipe(plg.sass({
				outputStyle: 'compressed'
			}))
			.pipe(plg.concat('basic.css'))
			.pipe(plg.cleanCss())
			.pipe(gulp.dest('./'));
	} else { // run if --dist flag is not present
		return gulp.src(source)
			.pipe(plg.plumber())
			.pipe(plg.sourcemaps.init())
			.pipe(plg.sass({
				outputStyle: 'compressed'
			}))
			.pipe(plg.concat('basic.css'))
			.pipe(plg.sourcemaps.write())
			.pipe(gulp.dest('./'))
			.pipe(browserSync.reload({stream: true}));
	}
});

gulp.task('serve', ['default'], function() {
	gulp.watch(['./**/*.html'], browserSync.reload);
	gulp.watch(['./basic.scss'], ['default']);

	return browserSync({
		server: {
			baseDir: './',
			directory: true
		},
		logPrefix: 'BrowserSync',
		reloadDelay: 2000,
		open: 'ui'
	});
});
