const gulp = require('gulp');
const zip = require('gulp-zip');
const app = require('./package.json');

function zipTask() {
  return gulp
    .src('build/**', { encoding: false })
    .pipe(zip(`${app.name}-${app.version}.mds.zip`))
    .pipe(gulp.dest('minidapp'));
}

exports.default = zipTask;
