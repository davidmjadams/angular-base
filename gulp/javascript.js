var gulp = require('gulp'),
    getBundleName = require('./bundle-name'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate');

module.exports = function() {

    return gulp.src('./public/app/app.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(rename(getBundleName('dev') + '.js'))
        .pipe(gulp.dest('./public/dist/js'));
};
