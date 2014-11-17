var gulp = require('gulp'),
    getBundleName = require('./bundle-name'),
    del = require('del');

module.exports = function() {
    // path relative to gulpfile
    return;
    return del([
        './public/dist/js/*',
        '!./public/dist/js/' + getBundleName()
    ]);
};