import gulp from 'gulp';
import zip from 'gulp-zip';
import app from './package.json' with { type: 'json' };

export default function zipTask() {
  return gulp
    .src('build/**', { encoding: false })
    .pipe(zip(`${app.name}-${app.version}.mds.zip`))
    .pipe(gulp.dest('minidapp'));
}
