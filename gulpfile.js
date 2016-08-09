var gulp = require('gulp');
var less = require('gulp-less');

var less_path = 'public/app/styles/less/';
var css_path = 'public/app/styles/css/';

gulp.task('compile-less', function() {
  gulp.src(less_path + '*.less')
    .pipe(less())
    .pipe(gulp.dest(css_path));
});

gulp.task('watch-less', function() {
  gulp.watch(less_path + '*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less']);
