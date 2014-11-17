var gulp = require('gulp'),
    connect = require('gulp-connect');

module.exports = function() {
    return gulp.src('./public/**/*')
        .pipe(connect.reload());
};
