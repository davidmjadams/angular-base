var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = function() {
    return gulp.src('./public/app/**/*.js')
        .pipe(ngAnnotate({
            single_quotes: true
        }))
        .pipe(gulp.dest('./public/dist/js/app'));
}
