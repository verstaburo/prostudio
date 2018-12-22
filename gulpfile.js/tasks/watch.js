const gulp = require('gulp');

module.exports = () => {
  global.isWatching = true;

  gulp.watch('app/static/icons/**/*', { usePolling: true }, gulp.series('icons'));
  gulp.watch('app/static/images/**/*', { usePolling: true }, gulp.series('images'));
  gulp.watch('app/static/misc/**/*', { usePolling: true }, gulp.series('copy'));
  gulp.watch('app/scripts/**/*.js', { usePolling: true }, gulp.series('copymain'));
  gulp.watch('app/{pages,blocks,components,layouts}/**/*.pug', { usePolling: true }, gulp.series('templates'));
  gulp.watch('app/{styles,blocks,components,pages}/**/*.scss', { usePolling: true }, gulp.series('styles'));
  gulp.watch('app/data/**/*.json', { usePolling: true }, gulp.series('templates'));
};
