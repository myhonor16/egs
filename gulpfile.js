var gulp = require('gulp');

var rename = require("gulp-rename");

var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var csslint = require('gulp-csslint');

gulp.task('build', function() {

	// compile export.scss
	gulp.src('./build/egs.scss')
		.pipe(sass({
			style: 'expanded'
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(minifyCSS())
		.pipe(rename('egs.min.css'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('test', function() {

	// run csslint on webnext-ui.css
	gulp.src('./dist/egs.css')
		.pipe(csslint('csslintrc.json'))
		.pipe(csslint.reporter());
});

gulp.task('default', ['build', 'test'], function() {
});