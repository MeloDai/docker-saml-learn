var gulp = require('gulp');
var config = require('../config').moveapp;

gulp.task('moveapp', function() {
  	return gulp.src(config.src)
    	.pipe(gulp.dest(config.dest));
});
