var gulp = require('gulp');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var getBundleName = require('./bundle-name');

module.exports = function() {
    gulp.src("./public/app/**/*.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "templateCache"
        }))
        .pipe(concat(getBundleName('dev') + ".partials.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./public/dist/js"));
}