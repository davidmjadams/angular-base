var postal = require('postal');

module.exports = {
    publish: function(channel, topic, data) {
        postal.publish({
            channel: channel,
            topic: topic,
            data: data
        });
    },

    subscribe: function(channel, topic, callback) {
        postal.subscribe({
            channel: channel,
            topic: topic,
            callback: callback
        });
    }
};