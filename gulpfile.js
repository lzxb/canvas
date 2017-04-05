const gulp = require('gulp')
const eslint = require('gulp-eslint')

gulp.task('lint', () => {
  return gulp
    .src(['*?.js', '*?.html', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
})

gulp.task('default', ['lint'])

if (process.env.NODE_ENV !== 'production') {
  gulp.watch(['*?.js', '*?.html', '!node_modules/**'], ['default'])
}
