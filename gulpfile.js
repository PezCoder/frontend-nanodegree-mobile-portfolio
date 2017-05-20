var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');

gulp.task('compress', function (cb) {
  pump([
    gulp.src('js/*.js'),
    uglify(),
    gulp.dest('build')
  ],
    cb
  );
});

gulp.task('htmlminify', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('minify', ['compress', 'htmlminify']);
