const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('default', () => {
  gulp.src('beforeimg/*')
    .pipe(imagemin([
      imageminMozjpeg({ quality: '85' }),
    ], { verbose: true }))
    .pipe(gulp.dest('public/images'));
});
