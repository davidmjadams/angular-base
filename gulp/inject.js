var gulp = require('gulp'),
    getBundleName = require('./bundle-name'),
    inject = require("gulp-inject");

module.exports = function () {
    var target = gulp.src('./public/index.html'),
        sources = gulp.src(
            [
                './public/dist/js/' + getBundleName('dev') + '.js',
                './public/dist/js/' + getBundleName('dev') + '.partials.js',
                './public/dist/styles/**/*.css'
            ],
            {
                read: false
            }
        );

  return target.pipe(inject(sources, {
        ignorePath: 'public',
        addRootSlash: false
    }))
    .pipe(gulp.dest('./public'));
};