const gulp = require('gulp');
const g = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const postcssStylelint = require('stylelint');
const postcssReporter = require('postcss-reporter');
/* eslint-disable */
const postcssScss = require('postcss-scss');
/* eslint-enable */


// Run a Development Server
gulp.task('serve', ['default'], () => {
	gulp.watch(['*.scss'], ['default']);
	gulp.watch(['demos/*.html'], browserSync.reload);

	return browserSync({
		server: {
			baseDir: './',
			directory: true, // Show directory listings
		},
		logPrefix: 'BrowserSync',
		reloadDelay: 2000,
		open: 'ui',
	});
});


gulp.task('default', () => gulp.src(['*.scss'])
	.pipe(g.postcss(
		[
			postcssStylelint(), // Check CSS code for errors & bad practices
			postcssReporter({ // Output any errors
				clearMessages: true, // Clear error log once done
			}),
		],
		{ parser: postcssScss } // Use SCSS syntax
	))
	.pipe(g.sourcemaps.init())
		.pipe(g.sass({ // compile SCSS
			outputStyle: 'expanded',
		}))
		.pipe(g.autoprefixer({ // add vendor prefixed versions of properties
			browsers: ['last 2 versions'],
		}))
		.pipe(g.cleanCss()) // minify
	.pipe(g.sourcemaps.write('../sourcemaps/'))
	.pipe(gulp.dest('./'))
	.pipe(browserSync.stream())
);
