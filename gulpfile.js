var gulp = require('gulp'),
		watch = require('gulp-watch'),
		postcss = require('gulp-postcss'),
		autoprefixer = require('autoprefixer'),
		cssvars = require('postcss-simple-vars'),
		nested = require('postcss-nested'),
		cssImport = require('postcss-import');

var paths = {
	styles: {
		src: './assets/styles/**/*.css',
		dest: './temp/styles'
	},
	html: {
		src: './index.html',
		dest: './index.html',
	},
	watchStyles: {
		src: './assets/styles/css/styles.css'
	}
};

gulp.task('default', function () {
  console.log("Woot! You created a Gulp task.");
});

//gulp.task('html', function() {
function html() {
  console.log("Imagine something usefull being done to your HTML here...");
};

// gulp.task('styles', function() {
//   return gulp.src('./assets/styles/styles.css')
//     .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
//     .pipe(gulp.dest('./temp/styles'));
// });

function styles() {
  return gulp.src(paths.styles.src)
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest(paths.styles.dest));
};

function watch() {

  gulp.watch(paths.html.src, html);
	gulp.watch(paths.watchStyles.src, styles);

	// gulp.watch("./index.html", function () {
	// 	console.log("Imagine something usefull being done to your HTML here...");
	// });
	
	// gulp.watch("./assets/styles/css/styles.css", function () {
	// 	return gulp.src(paths.styles.src)
	// 		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	// 		.pipe(gulp.dest(paths.styles.dest));
	// });

};

// gulp.task('copy', function() {
// 	console.log('Start copy...')
// 	return gulp.src('./assets/styles/style.css')
// 	.pipe(gulp.dest('./temp/styles'))
// 	console.log('Start copy...');
// })

exports.html = html;
exports.styles = styles;
exports.watch = watch;
