var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').script;
var argv = require('yargs').argv;
var runSequence = require('run-sequence');

var replace = require('gulp-replace');
 

gulp.task('replace-heatmap', function() {
  gulp.src(['node_modules/react-leaflet-heatmap-layer/lib/HeatmapLayer.js'])
    .pipe(replace('(overlayPane\.contains', '(overlayPane \&\& overlayPane\.contains'))
    .pipe(gulp.dest('node_modules/react-leaflet-heatmap-layer/lib/'));
});