var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var replace = require('gulp-replace');
var connect = require('gulp-connect');

// Aliases
gulp.task('default', ['serve']);
gulp.task('build', ['copy', 'js']);


// Copy
gulp.task('copy', function() {
    gulp.src(['*.html'])
      .pipe(replace('src="/src/player.js"', 'src="/player.js"'))
      .pipe(gulp.dest('dist'));
    gulp.src(['*.ico', '*.jpg', '*.png']).pipe(gulp.dest('dist'));
    gulp.src(['_headers']).pipe(gulp.dest('dist'));
    gulp.src(['7.9.1/**/*']).pipe(gulp.dest('dist/7.9.1'));
});


// JS
gulp.task('js', function (cb) {
  pump([
        gulp.src('src/**/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

// Serve
gulp.task('serve', function() {
  connect.server({
    port: 8080
  });
});

