var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');

var browserify = require('browserify')
var source = require('vinyl-source-stream')


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
  }));
});

gulp.task('src', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('watch', ['browserSync', 'sass', 'browserify', 'src'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('public/*.html', ['src']);
  gulp.watch('app/js/**/*.js', ['browserify']);
});

gulp.task('connect', function () {
  connect.server({
    root: 'app',
    port: 4000
  });
});

gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify('./app/app.js')
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(source('main.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('./public/js/'))
    .pipe(browserSync.reload({
      stream: true
    })
  );
});