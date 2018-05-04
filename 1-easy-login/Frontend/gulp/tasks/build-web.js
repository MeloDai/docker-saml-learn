var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('apply-prod-environment', function() {
    process.env.NODE_ENV = 'production';
});

gulp.task('build-web', function(callback) {
  runSequence(['web-css','apply-prod-environment','browserify','markup'],
              'min-react',
              callback);
});

// gulp.task('build-web', ['csss','browserify','markup']);