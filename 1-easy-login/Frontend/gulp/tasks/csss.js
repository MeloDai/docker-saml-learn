var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').csss;

var srcs = [];
srcs.push('src/make/css/css.css');

gulp.task('web-css',function(){
   	return gulp.src(srcs)      
       .pipe(concat('all.css'))  
       .pipe(minifycss())     
       .pipe(gulp.dest(config.dest))
});