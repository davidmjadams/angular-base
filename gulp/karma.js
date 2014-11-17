var gulp = require('gulp'),
    karma = require('karma').server;

module.exports = {
    test: function(done) {
        karma.start({
            configFile: __dirname + '../../karma.conf.js',
            singleRun: true
        }, done);
    },
    watch: function(done) {
        karma.start({
            configFile: __dirname + '../../karma.conf.js'
        }, done);
    }
};