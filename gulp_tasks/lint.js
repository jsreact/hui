var gulp = require('gulp')
var eslint = require('gulp-eslint')

gulp.task('lint', function() {
  return gulp.src(['./**/*.js', '!./node_modules/**', '!./bin/**', '!./gulp*', '!./gulp_tasks/**', '!./dist/**', '!./**/*Shim*'])
    .pipe(eslint({ quiet: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})
