var gulp = require('gulp'),
    getBundleName = require('./bundle-name');

module.exports = function () {
    gulp.watch(['./public/app/**/*'], ['inject:dev']);
    gulp.watch(['./public/dist/js/' + getBundleName('dev') + '.js'], ['livereload']);
};