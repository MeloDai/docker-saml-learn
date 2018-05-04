var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../config').script;
var argv = require('yargs').argv;
var runSequence = require('run-sequence');

// var replace = require('gulp-replace');
 

// gulp.task('replace-heatmap', function() {
//   gulp.src(['node_modules/react-leaflet-heatmap-layer/lib/HeatmapLayer.js'])
//     .pipe(replace('(overlayPane\.contains', '(overlayPane \&\& overlayPane\.contains'))
//     .pipe(gulp.dest('node_modules/react-leaflet-heatmap-layer/lib/'));
// });

var srcs = []
// srcs.push('src/www/fetch.js');
// srcs.push('src/www/moment.js');
srcs.push('src/make/js/includes.js');
srcs.push('src/make/js/versionInfo.js');
srcs.push('src/make/js/isMobile.js');
// srcs.push('jspdf/jspdf.debug.js');
// srcs.push('jspdf/html2canvas.min.js');
srcs.push('src/app/Setting/defaultMasthead.js');

// srcs.push('src/make/js/setting.js');

// srcs.push('build/js/main.js');

gulp.task("script",function(){
    return gulp.src(srcs)
	    .pipe(concat('library.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest(config.dest))
})

gulp.task("internal",function(){
	srcs.push('src/make/js/ANA_internal.js');
    return gulp.src(srcs)
	    .pipe(concat('library.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest(config.dest))
})

gulp.task("ingress",function(){
	srcs.push('src/make/js/ANA_ingress.js');
    return gulp.src(srcs)
	    .pipe(concat('library.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest(config.dest))
})

gulp.task("saml20",function(){
	srcs.push('src/make/js/ANA_saml20.js');
    return gulp.src(srcs)
	    .pipe(concat('library.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest(config.dest))
})

gulp.task('ana-internal', function(callback) {
  runSequence('internal',
              callback);
});

gulp.task('ana-ingress', function(callback) {
  runSequence('ingress',
              callback);
});

gulp.task('ana-saml20', function(callback) {
  runSequence('saml20',
              callback);
});
