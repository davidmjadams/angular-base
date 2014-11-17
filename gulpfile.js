var gulp = require('gulp'),
    js = require('./gulp/javascript'),
    bumpVersion = require('./gulp/bump-version'),
    inject = require('./gulp/inject'),
    clean = require('./gulp/clean'),
    server = require('./gulp/server'),
    templates = require('./gulp/templates'),
    karma = require('./gulp/karma'),
    livereload = require('./gulp/livereload'),
    watch = require('./gulp/watch'),
    canned = require('./gulp/canned');

/**
 * JS build tasks
 */
gulp.task('bump', bumpVersion);
gulp.task('clean', ['bump'], clean);
gulp.task('js:deploy', ['clean', 'bump'], js);
gulp.task('js:dev', ['clean'], js);
gulp.task('tmpl', ['clean'], templates);

gulp.task('inject', ['clean', 'bump', 'js:deploy', 'tmpl'], inject);
gulp.task('inject:dev', ['js:dev', 'tmpl'], inject);

/**
 * Testing tasks
 */
gulp.task('test', karma.test);
gulp.task('tdd', karma.watch);
gulp.task('mock', canned);

/**
 * Server tasks
 */
gulp.task('connect', server);
gulp.task('livereload', livereload);
gulp.task('watch', watch);

/**
 * General tasks
 */

gulp.task('build', ['inject']);
/*
Dev task shouldn't touch versioning and just add dev.package.min.js or something
 */
gulp.task('dev', ['connect', 'watch']);
gulp.task('default', function() {});

// The protractor task
var protractor = require('gulp-protractor').protractor;

// Download and update the selenium driver
var webdriver_update = require('gulp-protractor').webdriver_update;

// Downloads the selenium webdriver
gulp.task('webdriver_update', webdriver_update);


// Setting up the test task
gulp.task('protractor', ['webdriver_update'], function(cb) {
    gulp.src(['features/*.feature']).pipe(protractor({
        configFile: 'protractor.conf.js',
    })).on('error', function(e) {
        console.log(e)
    }).on('end', cb);
});
