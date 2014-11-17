var dispatcher = require('app/dispatcher');

function eventEmitter() {};

eventEmitter.prototype.subscribe = function(channel, topic, callback) {
    dispatcher.subscribe(channel, topic, callback);
};

module.exports = eventEmitter;