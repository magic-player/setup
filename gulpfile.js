var gulp = require('gulp');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var merge = require('merge-stream');
var rename = require("gulp-rename");


// Build Parameters
var domain = 'https://player.vidad.net/';
var bundledPlayerVersion = '7.9.1';
var distJWP = 'dist/jwp/' + bundledPlayerVersion;


// Aliases
gulp.task('default', ['serve']);


// Build
gulp.task('build', ['copy', 'vast', 'player']);
gulp.task('build:dev', [], function () {
  domain = 'http://localhost:5000/';
  gulp.start('build');
})


// Copy
gulp.task('copy', ['clean'], function () {
  return merge(
    gulp.src(['index.html']).pipe(gulp.dest('dist')),
    gulp.src(['fonts/**/*', 'content/**/*', 'icons/**/*', 'vpaid/**/*', 'check/**/*'], {base: '.'}).pipe(gulp.dest('dist')),
    gulp.src(['favicon.ico', 'ping.gif']).pipe(gulp.dest('dist')),
    gulp.src(['_headers', 'crossdomain.xml']).pipe(gulp.dest('dist')),
    gulp.src(['bundle/' + bundledPlayerVersion + '/**/*']).pipe(gulp.dest(distJWP))
  );
});


// VAST
gulp.task('vast', ['clean'], function (cb) {
  return merge(
    gulp.src(['vast/**/*.js']).pipe(uglify()).pipe(gulp.dest(distJWP)),
    gulp.src(['vast/vast.swf']).pipe(gulp.dest(distJWP))
  );
});


// Main Player File
gulp.task('player', ['clean'], function (cb) {
  return gulp.src(['bundle/' + bundledPlayerVersion + '/jwplayerv.js'])
    .pipe(replace('http://ssl.p.jwpcdn.com/player/v/', domain + 'jwp/'))
    .pipe(uglify())
    .pipe(rename('player.js'))
    .pipe(gulp.dest('dist'));
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
