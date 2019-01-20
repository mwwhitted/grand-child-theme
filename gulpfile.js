var gulp = require('gulp'),
		watch = require('gulp-watch'),
		postcss = require('gulp-postcss'),
		autoprefixer = require('autoprefixer'),
		cssvars = require('postcss-simple-vars'),
		nested = require('postcss-nested');

gulp.task('default', function () {
  console.log("Woot! You created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something usefull being done to your HTML here...");
});

gulp.task('styles', function() {
  return gulp.src('./assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'));
});

gulp.task('watch', function() {

  watch('./index.html', function() {
      gulp.start('html');
  });

	watch('./assets/styles/**/*.css', function() {
      gulp.start('styles');
  });

});

gulp.task('copy', function() {
	console.log('Start copy...')
	return gulp.src('./assets/styles/style.css')
	.pipe(gulp.dest('./temp/styles'))
	console.log('Start copy...');
})
