var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').script;
var argv = require('yargs').argv;

var srcs = []
srcs.push('build/main.js');

// srcs.push('src/make/js/setting.js');

// srcs.push('build/js/main.js');

gulp.task("min-react",function(){
    return gulp.src(srcs)
	    .pipe(concat('main.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest(config.dest))
})