var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var replace = require('gulp-replace');
var connect = require('gulp-connect');
var clean = require('gulp-clean');

// Aliases
gulp.task('default', ['serve']);
gulp.task('build', ['copy', 'js']);


// Copy
gulp.task('copy', ['clean'], function() {
    gulp.src(['*.html'])
      .pipe(replace('src="/src/player.js"', 'src="/player.js"'))
      .pipe(gulp.dest('dist'));
    gulp.src(['fonts/**/*', 'content/**/*', 'icons/**/*', 'vpaid/**/*', 'check/**/*'], {base: '.'}).pipe(gulp.dest('dist'));
    gulp.src(['*.ico', '*.gif', '*.jpg', '*.png']).pipe(gulp.dest('dist'));
    gulp.src(['_headers', 'crossdomain.xml', 'vpaid.xml']).pipe(gulp.dest('dist'));
    gulp.src(['bundle/7.9.1/**/*']).pipe(gulp.dest('dist/7.9.1'));
    gulp.src(['bundle/7.10.4/**/*', '!bundle/7.10.4/**/*.js']).pipe(gulp.dest('dist/7.10.4'));
    gulp.src(['bundle/7.12.1/**/*', '!bundle/7.12.1/**/*.js']).pipe(gulp.dest('dist/7.12.1'));
});


// JS
gulp.task('js', ['clean', 'copy'], function (cb) {
  pump([
        gulp.src(['src/**/*.js', '**/*.js', '!node_modules/**/*', '!dist/**/*.js']),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

// Clean
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

// Serve
gulp.task('serve', function() {
  connect.server({
    port: 8080
  });
});

