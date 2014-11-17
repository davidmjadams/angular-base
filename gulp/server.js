var gulp = require('gulp'),
  connect = require('gulp-connect');

module.exports = function() {

    return connect.server({
        root: './public',
        livereload: true,
        port: 8080
    });
};
