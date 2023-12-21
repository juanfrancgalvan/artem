import gulp from 'gulp';
import imagemin, { mozjpeg, optipng } from 'gulp-imagemin';
import webp from 'gulp-webp';

export default () => (
  gulp.src('./imagenes/*')
    .pipe(imagemin([mozjpeg({ quality: 10 }), optipng({ optimizationLevel: 5 })]))
    .pipe(webp())
    .pipe(gulp.dest('./imagenes/convertidas'))
);